using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace POC.Models
{
    public class POCContext : DbContext
    {
        public POCContext() : base("DefaultConnection")
        {
        }
        public DbSet<FormMasterModel> FormMasterModel { get; set; }
        public DbSet<FormDataModel> FormDataModel { get; set; }
        public DbSet<APITestModel> APITestModel { get; set; }
    }
}