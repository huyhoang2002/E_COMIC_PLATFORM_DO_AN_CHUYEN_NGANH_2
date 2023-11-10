using ComicService.Domain.Aggregates.Comics;
using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Domain.Aggregates.Authors
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

        public Author(string name, DateTime dateOfBirth, string description)
        {
            Name = name;
            DateOfBirth = dateOfBirth;
            Description = description;
            IsDeleted = false;
        }

        public Author(string name, DateTime dateOfBirth, string description, string avatarImage) : this(name, dateOfBirth, description)
        {
            AvatarImage = avatarImage;
            IsDeleted = false;
        }

        public void UpdateAuthor(string name, DateTime dateOfBirth, string description, string avatarImage)
        {
            Name = name;
            DateOfBirth = dateOfBirth;
            Description = description;
            AvatarImage = avatarImage;
            ModifiedAt = DateTime.Now;
        }

        public void UpdateAvatarImage(string avatarImage)
        {
            AvatarImage = avatarImage;
            ModifiedAt = DateTime.Now;
        }
    }
}
