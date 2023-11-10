using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Aggregates.Comics
{
    public class Author : EntityBase<Guid>
    {
        public string Name { get; private set; }
        public DateTime DateOfBirth { get; private set; }
        public string Description { get; private set; }
        public string AvatarImage { get; private set; }
        private readonly List<Comic> _comics = new List<Comic>();
        public IReadOnlyCollection<Comic> Comics => _comics;

        public Author()
        {

        }

        public Author(string name, DateTime dateOfBirth, string description, string avatarImage)
        {
            Name = name;
            DateOfBirth = dateOfBirth;
            Description = description;
            AvatarImage = avatarImage;
        }
    }
}
