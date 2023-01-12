using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Neoencabulator.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Neoencabulator.Controllers
{
    public class LinkedListPoco
    {
        // The structure in this type, must match the POST request object's body EXACTLY. Including names.
        public string item { get; set; }
        public Guid id { get; set; }
    }

    public class LinkedListInsertPayload
    {
        public string toInsert { get; set; }
        public Guid beforeLocation { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class LinkedListController : ControllerBase
    {
        private readonly ILogger<LinkedListController> _logger;

        public LinkedListController(ILogger<LinkedListController> logger)
        {
            _logger = logger;
        }

        [HttpPost("append")]
        public IActionResult AddItem(LinkedListPoco post)
        {
            LinkedListLogic.addNode(post.item);
            return StatusCode(204);
        }

        [HttpPost("insert")]
        public void InsertItem(LinkedListInsertPayload payload) // Controller POST methods can only have a single input. See: https://stackoverflow.com/questions/6627300/post-multiple-parameters-to-mvc-controller-using-c-sharp
        { 
            LinkedListLogic.insertNode(payload.toInsert, payload.beforeLocation);
        }

        [HttpPost("remove")]
        public void RemoveName(LinkedListPoco post)
        {
            LinkedListLogic.removeNode(post.id);
        }

        [HttpGet]
        public List<LinkedListPoco> Get()
        {
            List<LinkedListPoco> returnList = new List<LinkedListPoco>();
            var nodeList = LinkedListLogic.getList();
            foreach(LinkedListNode node in nodeList)
            {
                returnList.Add(new LinkedListPoco
                {
                    id = node.id,
                    item = node.content
                });
            }
            return returnList;
        }
    }
}
