using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class APITestModel
    {
        [Key]
        public int Id { get; set; }
        public string SUBCODE { get; set; }
        public string DESCR { get; set; }
        public float? CTD { get; set; }
        public float? CFFC { get; set; }
        public DateTime? SSTARTDATE { get; set; }
        public long? LINEID { get; set; }
    }
}