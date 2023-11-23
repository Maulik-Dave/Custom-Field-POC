using Newtonsoft.Json;
using POC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace POC.Controllers
{
    public class HomeController : Controller
    {
        POCContext ct;

        public HomeController()
        {
            ct = new POCContext();
        }

        public ActionResult Index()
        {           
            return View();
        }

        public ActionResult About()
        {            
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult TestView()
        {
            return View();
        }

        [HttpPost]
        public ActionResult TestView1()
        {
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult FormAdd()
        {
            return View();
        }

        [HttpPost]
        public ActionResult FormAdd(FormMasterModel modelData)
        {
            if (modelData != null && !string.IsNullOrEmpty(modelData.Form))
            {

                

                var model = new FormMasterModel();
                model.Form = modelData.Form;

                ct.Database.ExecuteSqlCommand("DELETE FROM [dbo].[FormDataModels]");
                ct.Database.ExecuteSqlCommand("DELETE FROM [dbo].[FormMasterModels]");

                ct.FormMasterModel.Add(model);
                ct.SaveChanges();

                return RedirectToAction("FormEdit",new { id = model.Id });
            }
            
            return RedirectToAction("BuildForm");
        }

        [HttpGet]
        public ActionResult FormMasterEdit(int id = 0)
        {
            var getData = ct.FormMasterModel.Where(x => x.Id == id).FirstOrDefault();

            return View(getData);
        }

        [HttpPost]
        public ActionResult FormMasterEdit(FormMasterModel modelData)
        {
            if (modelData != null && !string.IsNullOrEmpty(modelData.Form))
            {
                var getData = ct.FormMasterModel.Where(x => x.Id == modelData.Id).FirstOrDefault();

                if (getData != null)
                {
                    getData.Form = modelData.Form;
                    ct.SaveChanges();
                }

            }

            return RedirectToAction("BuildForm");
        }

        [HttpGet]
        public ActionResult FormDataEdit(int formDataId = 0,int formMasterId = 0)
        {
            var results = new FormDataViewModel();

            var getData = ct.FormDataModel.Include("FormMasterModel").Where(x => x.Id == formDataId && x.FormId == formMasterId).FirstOrDefault();

            if (getData != null && getData.FormMasterModel != null)
            {
                var dataFormValue = JsonConvert.DeserializeObject<List<FormDataNameValueModel>>(getData.Data);

                var masterFormValue = JsonConvert.DeserializeObject<List<FormMasterAndDataValueModel>>(getData.FormMasterModel.Form);

                if (masterFormValue != null && masterFormValue.Count > 0)
                {                    
                    foreach (var item in masterFormValue)
                    {
                        var singleValue = dataFormValue.Where(x => x.name == item.name).FirstOrDefault();

                        if (singleValue != null)
                        {
                            item.userData = singleValue.userData;
                        }
                    }

                    results.Id = formDataId;
                    results.FormId = formMasterId;

                    results.Data = JsonConvert.SerializeObject(masterFormValue);
                }
            }

            return View("FormDataEdit", results);
        }

        [HttpPost]
        public ActionResult FormDataEdit(FormDataViewModel modelData)
        {
            if (modelData != null && !string.IsNullOrEmpty(modelData.Data))
            {
                //var model = new FormDataModel();
                //model.FormId = modelData.Id;
                //model.Data = modelData.Form;

                try
                {
                    var getFormMasterId = ct.FormDataModel.Where(x => x.Id == modelData.Id).FirstOrDefault();

                    var jsonData = string.Empty;

                    var dataFormValue = JsonConvert.DeserializeObject<List<FormDataValueModel>>(modelData.Data);

                    if (dataFormValue != null && dataFormValue.Count > 0)
                    {
                        var finalData = dataFormValue.Select(s => new FormDataNameValueModel
                        {
                            name = s.name,
                            userData = s.userData
                        }).ToList();

                        jsonData = JsonConvert.SerializeObject(finalData);
                    }
                    else
                    {
                        jsonData = modelData.Data;
                    }

                    getFormMasterId.Data = jsonData;

                    ct.SaveChanges();
                }
                catch (Exception ex)
                {
                    //var getFormMasterId = ct.FormDataModel.Include("FormMasterModel").Where(x => x.Id == modelData.Id).FirstOrDefault();

                    //getFormMasterId.Data = modelData.Form;

                    //ct.SaveChanges();

                    return RedirectToAction("BuildForm");
                }
            }

            return RedirectToAction("BuildForm");
        }

        [HttpGet]
        public ActionResult FormEdit(int id = 0)
        {
            var getData = ct.FormMasterModel.Where(x => x.Id == id).FirstOrDefault();

            return View(getData);
        }

        [HttpPost]
        public ActionResult FormEdit(FormMasterModel modelData)
        {
            if (modelData != null && !string.IsNullOrEmpty(modelData.Form))
            {
                var model = new FormDataModel();
                model.FormId = modelData.Id;

                var jsonData = string.Empty;

                var dataFormValue = JsonConvert.DeserializeObject<List<FormDataValueModel>>(modelData.Form);

                if (dataFormValue != null && dataFormValue.Count > 0)
                {
                    var finalData = dataFormValue.Select(s => new FormDataNameValueModel
                    {
                        name = s.name,
                        userData = s.userData
                    }).ToList();

                    jsonData = JsonConvert.SerializeObject(finalData);
                }
                else
                {
                    jsonData = modelData.Form;
                }

                model.Data = jsonData;

                try
                {
                    ct.FormDataModel.Add(model);
                    ct.SaveChanges();
                }
                catch (Exception ex)
                {
                    //var getFormMasterId = ct.FormDataModel.Include("FormMasterModel").Where(x => x.Id == modelData.Id).FirstOrDefault();

                    //getFormMasterId.Data = modelData.Form;

                    //ct.SaveChanges();

                    return RedirectToAction("BuildForm");
                }
            }

            return RedirectToAction("BuildForm");
        }

        [HttpGet]
        public ActionResult BuildForm()
        {
            var getAllData = ct.FormDataModel.ToList();

            var formDataValueList = new List<FormDataValueModel>();

            if (getAllData != null)
            {
                var i = 0;

                foreach (var item1 in getAllData)
                {
                    ViewBag.Id = item1.FormId;

                    if (!string.IsNullOrEmpty(item1.Data))
                    {
                        var data = JsonConvert.DeserializeObject<List<FormDataValueModel>>(item1.Data);

                        if (data != null && data.Count > 0)
                        {
                            foreach (var item2 in data)
                            {
                                item2.FormDataId = item1.Id;
                                item2.FormId = item1.FormId;
                            }

                            formDataValueList.AddRange(data);

                            if (i == 0)
                            {
                                var getFormData = ct.FormMasterModel.Where(x => x.Id == item1.FormId).FirstOrDefault();

                                if (getFormData != null)
                                {
                                    var formData = JsonConvert.DeserializeObject<List<FormMasterValueModel>>(getFormData.Form);

                                    if (formData != null && formData.Count > 0)
                                    {
                                        var lst = new List<SelectListItem>();

                                        var labelData = formData.Select(x => new {
                                            LabelName = x.label,
                                            LabelValue = x.name,
                                        });

                                        if (labelData != null)
                                        {
                                            lst = labelData.Select(item => new SelectListItem { Text = item.LabelName, Value = item.LabelValue }).ToList();
                                        }

                                        ViewBag.LabelList = lst;
                                    }
                                }
                            }
                        }
                    }

                    i = i + 1;
                }
            }

            //var results = new FormDataViewModel();
            //results.FormDataValueModel = formDataValueList;

            var results = formDataValueList.GroupBy(x => x.FormDataId)
                .Select(m => new FormDataViewModel
                {
                    Id = m.FirstOrDefault().FormDataId,
                    FormId = m.FirstOrDefault().FormId,
                    FormDataValueModel = m.ToList(),
                }).ToList();

            return View(results);
        }

        [HttpGet]
        public ActionResult TestQuery()
        {
            var sqlqry = @"SELECT CAST(
                        (
                        select
                        JSON_Value (m.[value], '$.type') as [type],
                        JSON_Value (m.[value], '$.name') as [name],
                        JSON_Value (m.[value], '$.required') as [required],
                        JSON_Value (m.[value], '$.label') as [label],
                        JSON_Value (m.[value], '$.description') as [description],
                        JSON_Value (m.[value], '$.inline') as [inline],
                        JSON_Value (m.[value], '$.other') as [other],
                        JSON_Query (m.[value], '$.values') as [values],
                        JSON_Value (m.[value], '$.value') as [value],
                        JSON_Value (m.[value], '$.placeholder') as [placeholder],
                        JSON_Value (m.[value], '$.min') as [min],
                        JSON_Value (m.[value], '$.max') as [max],
                        JSON_Value (m.[value], '$.step') as [step],
                        JSON_Value (m.[value], '$.multiple') as [multiple],
                        JSON_Value (m.[value], '$.maxlength') as [maxlength]
                        from [dbo].[FormMasterModels] udf		
                        CROSS APPLY OPENJSON (udf.Form,'$') as m		
                        FOR JSON Auto
                        ) AS VARCHAR(MAX)) AS JSONDATA";

            var getAllData = ct.Database.SqlQuery<string>(sqlqry).FirstOrDefault();

            return Content(getAllData);
        }

            [HttpGet]
        public ActionResult LoadBuildFormData(string lable = null,string lableValue = null)
        {
            //var sqlqry = @"SELECT
            //            FDM.[Id] as Id,
            //            FDM.[FormId] as FormId,
            //            FDM.[Data] as Data
            //            FROM [dbo].[FormDataModels] FDM
            //            CROSS APPLY (
            //                SELECT label,userdata FROM OPENJSON( FDM.[Data] ) WITH (
            //                    label nvarchar(max) '$.label',
		          //              userdata nvarchar(max) '$.userData' AS JSON
            //                )
            //            ) AS j
            //            CROSS APPLY OPENJSON(j.userdata,'$') k
            //            WHERE j.label = case when {0} is null or {0} = '' then j.label else {0} end and k.[value] like case when {1} is null or {1} = '' then k.[value] else '%'+{1}+'%' end";

            var sqlqry = @"SELECT distinct
                        FDM.[Id] as Id,
                        FDM.[FormId] as FormId,
                        FDM.[Data] as Data
                        FROM [dbo].[FormDataModels] FDM
                        CROSS APPLY (
                            SELECT name,userdata FROM OPENJSON( FDM.[Data] ) WITH (
                                name nvarchar(max) '$.name',
		                        userdata nvarchar(max) '$.userData' AS JSON
                            )
                        ) AS j
                        CROSS APPLY OPENJSON(j.userdata,'$') k
                        WHERE j.[name] = case when {0} is null or {0} = '' then j.[name] else {0} end  and  k.[value] like case when {1} is null or {1} = '' then k.[value] else '%'+{1}+'%' end";

            var getAllData = ct.Database.SqlQuery<FormDataModel>(sqlqry, lable, lableValue).ToList();

            var formDataValueList = new List<FormDataValueModel>();

            if (getAllData != null)
            {
                var i = 0;

                foreach (var item1 in getAllData)
                {
                    ViewBag.Id = item1.FormId;

                    if (!string.IsNullOrEmpty(item1.Data))
                    {
                        var data = JsonConvert.DeserializeObject<List<FormDataValueModel>>(item1.Data);

                        if (data != null && data.Count > 0)
                        {
                            foreach (var item2 in data)
                            {
                                item2.FormDataId = item1.Id;
                                item2.FormId = item1.FormId;
                            }

                            formDataValueList.AddRange(data);

                            if (i == 0)
                            {
                                var getFormData = ct.FormMasterModel.Where(x => x.Id == item1.FormId).FirstOrDefault();

                                if (getFormData != null)
                                {
                                    var formData = JsonConvert.DeserializeObject<List<FormMasterValueModel>>(getFormData.Form);

                                    if (formData != null && formData.Count > 0)
                                    {
                                        var lst = new List<SelectListItem>();

                                        var labelData = formData.Select(x => new {
                                            LabelName = x.label,
                                            LabelValue = x.name,
                                        });

                                        if (labelData != null)
                                        {
                                            lst = labelData.Select(item => new SelectListItem { Text = item.LabelName, Value = item.LabelValue }).ToList();
                                        }

                                        ViewBag.LabelList = lst;
                                    }
                                }
                            }
                        }
                    }

                    i = i + 1;
                }
            }

            var results = formDataValueList.GroupBy(x => x.FormDataId)
                .Select(m => new FormDataViewModel
                {
                    Id = m.FirstOrDefault().FormDataId,
                    FormId = m.FirstOrDefault().FormId,
                    FormDataValueModel = m.ToList(),
                }).ToList();

            return View(results);
        }
    }
}