using EventProcessor.Events.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events
{
    public class SendAccountIdToUserEvent : IntergrationBaseEvent
    {
        public string AccountId { get; set; }

        public SendAccountIdToUserEvent(string accountId)
        {
            AccountId = accountId;
        }
    }
}
