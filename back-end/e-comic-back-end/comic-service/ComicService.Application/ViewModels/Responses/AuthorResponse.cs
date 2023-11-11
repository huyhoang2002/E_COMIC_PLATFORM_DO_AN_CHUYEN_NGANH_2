using ComicService.Domain.Aggregates.Authors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ComicService.Application.ViewModels.Responses
{
    public class AuthorResponse
    {
        public AuthorResponse(string name, DateTime dateOfBirth, string description, string avatarImage, Guid id)
        {
            Name = name;
            DateOfBirth = dateOfBirth;
            Description = description;
            AvatarImage = avatarImage;
            Id = id;
        }

        public AuthorResponse(Author author)
        {
            Name = author.Name;
            DateOfBirth = author.DateOfBirth;
            Description = author.Description;
            AvatarImage = author.AvatarImage;
            Id = author.Id;
        }

        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Description { get; set; }
        public string AvatarImage { get; set; }
        public Guid Id { get; set; }
    }
}
