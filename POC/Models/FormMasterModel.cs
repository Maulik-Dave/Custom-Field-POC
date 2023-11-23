using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class FormMasterModel
    {
        [Key]
        public int Id { get; set; }
        public string Form { get; set; }
    }

    public class TestFormMasterModel
    {
        public string TextBox { get; set; }
        public string TextArea { get; set; }
        public string Dropdown { get; set; }
        public string RadioGroup { get; set; }
        public bool CheckboxGroup { get; set; }
        public DateTime? Date { get; set; }
    }

}