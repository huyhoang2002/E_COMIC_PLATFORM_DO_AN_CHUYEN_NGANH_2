using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Integration.AspNet.Core;
using Microsoft.Bot.Connector;
using Microsoft.Bot.Connector.Authentication;
using Microsoft.Bot.Schema;

namespace EComic_bot.Bots
{
    public class EComicBot : ActivityHandler {
        public string Response { get; set; } = "";
        private readonly DialogSet _dialogSet;

        public EComicBot(ConversationState conversationState)
        {
            var dialogStateAccessor = conversationState.CreateProperty<DialogState>("DialogState");
            _dialogSet = new DialogSet(dialogStateAccessor);
            _dialogSet.Add(new TextPrompt(nameof(TextPrompt)));
            _dialogSet.Add(new WaterfallDialog(nameof(WaterfallDialog), new WaterfallStep[]
        {
            AskQuestionAsync,
            ProcessAnswerAsync,
        }));
        }

        //private readonly ILogger<EComicBot> _logger;

        public void SetResponse(string response)
        {
            Response = response;
        }

        protected override async Task OnMessageActivityAsync(ITurnContext<IMessageActivity> turnContext, CancellationToken cancellationToken)
        {
            var dialogContext = await _dialogSet.CreateContextAsync(turnContext, cancellationToken);
            var results = await dialogContext.ContinueDialogAsync(cancellationToken);

            if (results.Status == DialogTurnStatus.Empty)
            {
                // Start the WaterfallDialog if no other dialogs are active
                await dialogContext.BeginDialogAsync(nameof(WaterfallDialog), cancellationToken: cancellationToken);
            }
        }

        private async Task<DialogTurnResult> AskQuestionAsync(WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            return await stepContext.PromptAsync(nameof(TextPrompt), new PromptOptions
            {
                Prompt = MessageFactory.Text("What is your name?"),
            }, cancellationToken);
        }

        private async Task<DialogTurnResult> ProcessAnswerAsync(WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            var userName = (string)stepContext.Result;
            await stepContext.Context.SendActivityAsync($"Hello, {userName}!", cancellationToken: cancellationToken);

            // End the dialog
            return await stepContext.EndDialogAsync(cancellationToken: cancellationToken);
        }
    }
}
