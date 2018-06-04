using Microsoft.VisualStudio.TestTools.UnitTesting;
using ContactInfoManager.Models;
using System.Web.Http;
using System.Web.Http.Results;

namespace ContactInfoManager.Controllers.Tests {
	[TestClass()]
	public class ContactControllerTests {

		[TestMethod()]
		public void GetTest() {

			// Arrange
			ContactController controller = new ContactController();

			// Act
			IHttpActionResult actionResult = controller.Get();

			// Assert
			Assert.IsInstanceOfType(actionResult, typeof(OkNegotiatedContentResult<Contact[]>));
		}

		[TestMethod()]
		public void PostTest() {
			// Arrange
			ContactController controller = new ContactController();

			Contact contactToAdd = new Contact() {
				FirstName = "Vince",
				LastName = "Chao",
				Email = "vince.chao@test.com",
				PhoneNumber = 9878954321,
				Status = true
			};

			// Act
			IHttpActionResult actionResult = controller.Post(contactToAdd);
			var contentResult = actionResult as OkNegotiatedContentResult<Contact>;

			// Assert
			Assert.IsInstanceOfType(actionResult, typeof(OkNegotiatedContentResult<Contact>));
			Assert.AreEqual(contentResult.Content, contactToAdd);
		}

		[TestMethod()]
		public void PutTest() {
			// Arrange
			ContactController controller = new ContactController();

			Contact contactToUpdate = new Contact() {
				FirstName = "Vince",
				LastName = "Chao",
				Email = "vince.chao@test.com",
				PhoneNumber = 9878954321,
				Status = true
			};

			// Act
			IHttpActionResult actionResult = controller.Put(contactToUpdate);
			var contentResult = actionResult as OkNegotiatedContentResult<Contact>;

			// Assert
			Assert.IsInstanceOfType(actionResult, typeof(OkNegotiatedContentResult<Contact>));
			Assert.AreEqual(contentResult.Content, contactToUpdate);
		}

		[TestMethod()]
		public void DeleteTest() {
			// Arrange
			ContactController controller = new ContactController();

			Contact contactToDelete = new Contact() {
				FirstName = "Vince",
				LastName = "Chao",
				Email = "vince.chao@test.com",
				PhoneNumber = 9878954321,
				Status = true
			};

			// Act
			IHttpActionResult actionResult = controller.Delete(contactToDelete.FirstName);
			var contentResult = actionResult as OkResult;

			// Assert
			Assert.IsInstanceOfType(actionResult, typeof(OkResult));
		}
	}
}