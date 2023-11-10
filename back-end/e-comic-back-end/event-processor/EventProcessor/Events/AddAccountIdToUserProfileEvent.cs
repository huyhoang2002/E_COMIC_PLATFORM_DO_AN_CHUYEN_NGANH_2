using EventProcessor.Commons.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EventProcessor.Events
{
    public class AddAccountIdToUserProfileEvent : IntergrationBaseEvent
    {
        public string AccountId { get; set; }

        public AddAccountIdToUserProfileEvent(string accountId)
        {
            AccountId = accountId;
        }
    }
}
