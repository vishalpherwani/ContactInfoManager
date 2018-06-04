using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using ContactInfoManager.Models;

namespace ContactInfoManager {
	public class ContactContext : DbContext {

		public ContactContext()
            : base("DefaultConnection")
        {
		}
		public DbSet<Contact> Contacts { get; set; }

		protected override void OnModelCreating(DbModelBuilder modelBuilder) {
			modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
		}
	}

	
}