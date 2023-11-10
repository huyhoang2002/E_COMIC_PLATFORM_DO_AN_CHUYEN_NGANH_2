﻿using ComicService.Domain.Seedworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ComicService.Domain.Aggregates.Comics;

namespace ComicService.Domain.Aggregates.Categories
{
    public class Category : EntityBase<Guid>
    {
        public string CategoryName { get; private set; }
        private readonly List<Comic> _comics = new List<Comic>();
        public IReadOnlyCollection<Comic> Comics => _comics;

        public Category(string categoryName)
        {
            CategoryName = categoryName;
        }
    }
}
