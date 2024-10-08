﻿using ComicService.Application.ViewModels.Responses;
using ComicService.Domain.Aggregates.Categories;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Categories
{
    public class GetCategoriesQuery : IQuery<IEnumerable<GetCategoriesResponse>>
    {
        public bool IsDeleted { get; set; }
        public string Keyword { get; set; }
    }

    public class GetCategoriesQueryHandler : IQueryHandler<GetCategoriesQuery, IEnumerable<GetCategoriesResponse>>
    {
        private readonly ICategoryRepository _categoryRepository;

        public GetCategoriesQueryHandler(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<GetCategoriesResponse>> Handle(GetCategoriesQuery request, CancellationToken cancellationToken)
        {
            return _categoryRepository
                .GetQuery(_ => _.IsDeleted == request.IsDeleted && (String.IsNullOrEmpty(request.Keyword) || _.CategoryName == request.Keyword))
                .Select(_ => new GetCategoriesResponse(_));
        }
    }
}
