using ComicService.Domain.Aggregates.Authors;
using ComicService.Domain.Aggregates.Comics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.ViewModels.Responses
{
    public class GetAuthorsResponse
    {
        public GetAuthorsResponse(Guid id, string name, DateTime dateOfBirth, string description, string avatarImage, IEnumerable<Comic> comics)
        {
            Id = id;
            Name = name;
            DateOfBirth = dateOfBirth;
            Description = description;
            AvatarImage = avatarImage;
            Comics = comics;
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Description { get; set; }
        public string AvatarImage { get; set; }
        public IEnumerable<Comic> Comics { get; set; }
    }
}
