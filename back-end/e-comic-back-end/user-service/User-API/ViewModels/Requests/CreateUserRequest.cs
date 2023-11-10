namespace User_API.ViewModels.Requests
{
    public class CreateUserRequest
    {
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public int Age { get; private set; }
        public string Country { get; private set; }
        public string Job { get; private set; }
        public string PhoneNumber { get; private set; }
        public string Bio { get; private set; }
        public string? ImageUrl { get; private set; }
        public bool IsDisable { get; private set; }
        public bool IsRemove { get; private set; }
        public string AccountId { get; private set; }

        public CreateUserRequest(string firstName, string lastName, int age, string country, string job, string phoneNumber, string bio)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Country = country;
            Job = job;
            PhoneNumber = phoneNumber;
            Bio = bio;
        }

        public void SetAvatarUrl(string url)
        {
            ImageUrl = url;
        }

        public void SetAccountId(string accountId)
        {
            AccountId = accountId;
        }
    }
}
