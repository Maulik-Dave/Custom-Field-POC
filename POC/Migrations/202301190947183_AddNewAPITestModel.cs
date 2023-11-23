namespace POC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNewAPITestModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.APITestModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        SUBCODE = c.String(),
                        DESCR = c.String(),
                        CTD = c.Single(),
                        CFFC = c.Single(),
                        SSTARTDATE = c.DateTime(),
                        LINEID = c.Long(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.APITestModels");
        }
    }
}
