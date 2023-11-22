using User_API.Entities;

namespace User_API.ViewModels.Responses
{
    public class UserResponse
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
        public string Country { get; set; }
        public string Job { get; set; }
        public string PhoneNumber { get; set; }
        public string Bio { get; set; }
        public string ImageUrl { get; set; }
        public string AccountId { get; set; }
        public string Role { get; set; }


        public UserResponse(User user)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Age = user.Age;
            Country = user.Country;
            Job = user.Job;
            PhoneNumber = user.PhoneNumber;
            Bio = user.Bio;
            ImageUrl = user.ImageUrl;
            AccountId = user.AccountId;
        }

        public void SetRole(string role)
        {
            Role = role;
        }
    }
}
