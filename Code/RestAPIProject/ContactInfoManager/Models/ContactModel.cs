using System.ComponentModel.DataAnnotations;

namespace ContactInfoManager.Models {
	public class Contact {

		[Key]
		[Required(AllowEmptyStrings = false)]
		[DisplayFormat(ConvertEmptyStringToNull = false)]
		public string FirstName { get; set; }

		public string LastName { get; set; }

		[Required]
		[DataType(DataType.EmailAddress)]
		[EmailAddress]
		public string Email { get; set; }

		[DataType(DataType.PhoneNumber)]
		[RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Not a valid phone number")]
		public long PhoneNumber { get; set; }

		public bool Status { get; set; }
	}
}