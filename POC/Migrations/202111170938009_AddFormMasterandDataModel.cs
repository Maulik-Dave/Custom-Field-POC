namespace POC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddFormMasterandDataModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FormDataModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FormId = c.Int(nullable: false),
                        Data = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.FormMasterModels", t => t.FormId, cascadeDelete: true)
                .Index(t => t.FormId);
            
            CreateTable(
                "dbo.FormMasterModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Form = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.FormDataModels", "FormId", "dbo.FormMasterModels");
            DropIndex("dbo.FormDataModels", new[] { "FormId" });
            DropTable("dbo.FormMasterModels");
            DropTable("dbo.FormDataModels");
        }
    }
}
