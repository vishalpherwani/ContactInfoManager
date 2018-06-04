using System.Web.Http;
using System.Web.Http.Cors;
using ContactInfoManager.Models;
using ContactInfoManager.Providers;

namespace ContactInfoManager.Controllers {
	[EnableCors(origins: "*", headers: "*", methods: "GET,POST,PUT,DELETE")]
	public class ContactController : ApiController
    {
		private ContactsService contactsService;

		public ContactController() {
			this.contactsService = new ContactsService();
		}

		public IHttpActionResult Get() {
			var contacts = contactsService.GetAllContacts();
			return Ok(contacts);
		}

		public IHttpActionResult Post(Contact contact) {
			if (!ModelState.IsValid) {
				return BadRequest(ModelState);
			}
			var contacts = contactsService.AddContact(contact);
			return Ok<Contact>(contact);
		}

		public IHttpActionResult Put(Contact contact) {
			if (!ModelState.IsValid) {
				return BadRequest(ModelState);
			}
			var contacts = contactsService.UpdateContact(contact);
			return Ok<Contact>(contact);
		}

		public IHttpActionResult Delete([FromUri]string FirstName) {
			var contacts = contactsService.DeleteContact(FirstName);
			return Ok();
		}
	}
}
