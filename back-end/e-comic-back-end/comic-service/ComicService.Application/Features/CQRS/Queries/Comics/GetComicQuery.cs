using ComicService.Domain.Aggregates.Comics;
using ComicService.Infrastructure.CQRS.Query;
using ComicService.Infrastructure.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Application.Features.CQRS.Queries.Comics
{
    public class GetComicQuery : IQuery<Comic>
    {
        public Guid Id { get; set; }
    }

    public class GetComicQueryHandler : IQueryHandler<GetComicQuery, Comic>
    {
        private readonly IComicRepository _comicRepository;

        public GetComicQueryHandler(IComicRepository comicRepository)
        {
            _comicRepository = comicRepository;
        }

        public async Task<Comic> Handle(GetComicQuery request, CancellationToken cancellationToken)
        {
            var comic = _comicRepository.FirstOrDefault(_ => _.Id == request.Id);
            if (comic is null)
            {
                return null;
            }
            return comic;
        }
    }
}
