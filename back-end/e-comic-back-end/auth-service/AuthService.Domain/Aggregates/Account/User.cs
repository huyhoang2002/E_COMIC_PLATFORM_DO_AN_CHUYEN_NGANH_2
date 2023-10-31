using AuthService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AuthService.Domain.Aggregates.Account
{
    public class User : EntityBase
    {
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public int Age { get; private set; }
        public string AvatarImage { get; private set; }
        public string Bio { get; private set; }

        public string AccountId { get; set; }
        public Account Account { get; set; }

        public User()
        {

        }

        public User(string firstName, string lastName, int age, string avatarImage, string bio)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            AvatarImage = avatarImage;
            Bio = bio;
        }
    }
}
