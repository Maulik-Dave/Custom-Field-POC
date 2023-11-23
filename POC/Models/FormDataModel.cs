using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class FormDataModel
    {
        [Key]
        public int Id { get; set; }
        public int FormId { get; set; }
        public string Data { get; set; }

        [ForeignKey("FormId")]
        public FormMasterModel FormMasterModel { get; set; }
    }

    public class FormDataViewModel
    {        
        public int Id { get; set; }
        public int FormId { get; set; }
        public string Data { get; set; }
        
        public List<FormDataValueModel> FormDataValueModel { get; set; }
    }

    public class FormDataValueModel
    {
        public int FormId { get; set; }
        public int FormDataId { get; set; }
        public string type { get; set; }
        public bool required { get; set; }
        public string label { get; set; }
        public string className { get; set; }
        public string name { get; set; }
        public bool access { get; set; }
        public string subtype { get; set; }
        public List<string> userData { get; set; }
    }

    public class Value
    {
        public string label { get; set; }
        public string value { get; set; }
        public bool selected { get; set; }
    }

    public class FormMasterValueModel
    {
        public string type { get; set; }
        public bool required { get; set; }
        public string label { get; set; }
        public string className { get; set; }
        public string name { get; set; }
        public bool access { get; set; }
        public bool requireValidOption { get; set; }
        public List<Value> values { get; set; }
        public string subtype { get; set; }
        public string style { get; set; }
        public bool? toggle { get; set; }
        public bool? inline { get; set; }
        public bool? other { get; set; }
        public string value { get; set; }
        public bool? multiple { get; set; }
    }

    public class FormMasterAndDataValueModel
    {
        public string type { get; set; }
        public bool required { get; set; }
        public string label { get; set; }
        public string className { get; set; }
        public string name { get; set; }
        public bool access { get; set; }
        public bool requireValidOption { get; set; }
        public List<Value> values { get; set; }
        public string subtype { get; set; }
        public string style { get; set; }
        public bool? toggle { get; set; }
        public bool? inline { get; set; }
        public bool? other { get; set; }
        public string value { get; set; }
        public bool? multiple { get; set; }
        public List<string> userData { get; set; }
    }

    public class FormDataNameValueModel
    {        
        public string name { get; set; }        
        public List<string> userData { get; set; }
    }
}