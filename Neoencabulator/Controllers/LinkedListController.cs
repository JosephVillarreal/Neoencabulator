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
    }

    [ApiController]
    [Route("[controller]")]
    public class LinkedListController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public LinkedListController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpPost("add")]
        public void AddItem(LinkedListPoco post)
        {
            LinkedListLogic.addNode(post.item);
        }

        [HttpPost("remove")]
        public void RemoveName(LinkedListPoco post)
        {
            LinkedListLogic.removeNode(post.item);
        }

        [HttpGet]
        public List<string> Get()
        {
            //return new List<string> { "Works." };
            return LinkedListLogic.getList();
        }
    }
}
