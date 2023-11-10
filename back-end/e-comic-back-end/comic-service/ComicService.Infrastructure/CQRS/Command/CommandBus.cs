using ComicService.Infrastructure.UnitOfWork.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComicService.Infrastructure.CQRS.Command
{
    public class CommandBus : ICommandBus
    {
        private readonly IMediator _mediator;
        private readonly IUnitOfwork _unitOfwork;

        public CommandBus(IMediator mediator, IUnitOfwork unitOfwork)
        {
            _mediator = mediator;
            _unitOfwork = unitOfwork;
        }

        public async Task<object> SendAsync(object request)
        {
            return await _unitOfwork.SaveChangeAsync(() => _mediator.Send(request));
        }
    }
}
