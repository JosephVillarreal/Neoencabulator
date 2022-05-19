using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Neoencabulator.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Neoencabulator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public UsersController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public void PostNewName(restPostType input)
        {
          RestDataStorage.name = input.name;
        }

        [HttpGet]
        public string Get()
        {
            return RestDataStorage.name;
        }
    }

  public class restPostType
  {
    // The structure in this type, must match the POST request object's body EXACTLY. Including names.
    public string name { get; set; }
  }
}
