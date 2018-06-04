namespace ContactInfoManager.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Contacta : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Contact",
                c => new
                    {
                        FirstName = c.String(nullable: false, maxLength: 128),
                        LastName = c.String(),
                        Email = c.String(nullable: false),
                        PhoneNumber = c.Long(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.FirstName);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Contact");
        }
    }
}
