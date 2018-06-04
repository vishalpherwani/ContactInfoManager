using System;
using System.Linq;
using System.Web;
using ContactInfoManager.Models;

namespace ContactInfoManager.Providers {
	public class ContactsService {

		private const string CacheKey = "ContactStore";

		private ContactContext db = new ContactContext();

		public ContactsService() {
			var context = HttpContext.Current;

			if (context != null) {
				if (context.Cache[CacheKey] == null) {
					var contacts = new Contact[]
				{
					 new Contact {
						FirstName = "James",
						LastName = "Bond",
						Email = "james.bond@test.com",
						PhoneNumber = 9876543210,
						Status = true
					},
				new Contact {
						FirstName = "Bob",
						LastName = "Thomas",
						Email = "bob.thomas@test.com",
						PhoneNumber = 9876512340,
						Status = true
					}
				};
					context.Cache[CacheKey] = contacts;
				}
			}
		}

		public Contact[] GetAllContacts() {
			var ctx = HttpContext.Current;

			if (ctx != null) {
				return (Contact[])ctx.Cache[CacheKey];
			}

			return new Contact[]
				 {
				new Contact
				{
					FirstName = "Vince",
					LastName = "Chao",
					Email = "vince.chao@test.com",
					PhoneNumber = 9878954321,
					Status = true
				}
			};

			// Entity Framework Implementation with Database
			//return db.Contacts.ToArray();
		}

		public bool AddContact(Contact contact) {
			var ctx = HttpContext.Current;

			if (ctx != null) {
				try {
					var currentData = ((Contact[])ctx.Cache[CacheKey]).ToList();
					currentData.Add(contact);
					ctx.Cache[CacheKey] = currentData.ToArray();

					return true;
				} catch (Exception ex) {
					Console.WriteLine(ex.ToString());
					return false;
				}
			}

			return false;

			// Entity Framework Implementation with Database
			//try {
			//	db.Contacts.Add(contact);
			//	db.SaveChanges();
			//	return true;
			//} catch (Exception) {

			//	throw;
			//}

		}

		public bool UpdateContact(Contact contact) {
			var ctx = HttpContext.Current;

			if (ctx != null) {
				try {
					var currentdata = ((Contact[])ctx.Cache[CacheKey]).ToList();
					currentdata.Remove(currentdata.FirstOrDefault(c => c.FirstName == contact.FirstName));
					currentdata.Add(contact);
					ctx.Cache[CacheKey] = currentdata.ToArray();

					return true;
				} catch (Exception ex) {
					Console.WriteLine(ex.ToString());
					return false;
				}
			}

			return false;

			// Entity Framework Implementation with Database
			//var _contact = db.Contacts.Where(x => x.FirstName == contact.FirstName).Select(x => x).FirstOrDefault();

			//	_contact.FirstName = contact.FirstName;
			//	_contact.LastName = contact.LastName;
			//	_contact.Email = contact.Email;
			//	_contact.PhoneNumber = contact.PhoneNumber;
			//	_contact.Status = contact.Status;
			//	db.SaveChanges();
			//return true;
		}

		public bool DeleteContact(string FirstName) {
			var ctx = HttpContext.Current;

			if (ctx != null) {
				try {
					var currentData = ((Contact[])ctx.Cache[CacheKey]).ToList();
					currentData.Remove(currentData.FirstOrDefault(c => c.FirstName == FirstName));
					ctx.Cache[CacheKey] = currentData.ToArray();

					return true;
				} catch (Exception ex) {
					Console.WriteLine(ex.ToString());
					return false;
				}
			}

			return false;
			// Entity Framework Implementation with Database
			//var _contact = db.Contacts.Where(x => x.FirstName == FirstName).Select(x => x).FirstOrDefault();
			//db.Contacts.Remove(_contact);
			//db.SaveChanges();
			//return true;

		}

	}
}