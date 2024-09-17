using EventProcessor.Events;
using MassTransit;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Reaction_Business.Entities;
using Reaction_Data.Repositories.Interfaces;
using Reaction_Data.UnitOfWorks.Interfaces;

namespace Reaction_API.Consumers
{
    public class AddCommentConsumer : IConsumer<AddCommentEvent>
    {
        private readonly ILogger<AddCommentConsumer> _logger;
        private readonly ICommentRepository _repository;
        private readonly IUnitOfWork _unitOfWork;

        public AddCommentConsumer(ILogger<AddCommentConsumer> logger, ICommentRepository repository, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _repository = repository;
            _unitOfWork = unitOfWork;
        }

        public async Task Consume(ConsumeContext<AddCommentEvent> context)
        {
            var message = context.Message;
            var comment = new Comment(message.CommentText, message.CommentImage, message.UserName, message.UserId, message.UserAvatar, message.CommicId);
            await _repository.AddAsync(comment);
            await _unitOfWork.SaveChangeAsync();
        }
    }
}
