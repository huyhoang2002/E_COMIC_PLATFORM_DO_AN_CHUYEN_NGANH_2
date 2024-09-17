using EComic_bot.Bots;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Integration.AspNet.Core;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Schema;

namespace EComic_bot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BotController : ControllerBase
    {
        private readonly IBot _bot;
        private readonly IBotFrameworkHttpAdapter _botAdapter;

        public BotController(IBot bot, IBotFrameworkHttpAdapter botAdapter)
        {
            _bot = bot;
            _botAdapter = botAdapter;
        }

        [HttpPost("")]
        public async Task<IActionResult> PostAsync([FromBody] Activity activity, CancellationToken cancellationToken)
        {
            var result = await ReplyMessage(activity, $"You sent {activity.Text}");
            return Ok(new {
                Message = result
            });
        }

        private async Task<string> ReplyMessage(Activity activity, string message)
        {
            ConnectorClient connector = new ConnectorClient(new Uri(activity.ServiceUrl));
            var reply = activity.CreateReply(message);
            await connector.Conversations.ReplyToActivityAsync(reply);
            return reply.Text;
        }
    }
}
