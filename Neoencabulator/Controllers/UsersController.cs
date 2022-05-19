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

        private string Name;

        [HttpPost]
        public void PostNewName(restPostType input)
        {
          RestDataStorage.name = input.name;
        }

        [HttpGet]
        public string Get()
        {
            return Name;
        }
    }

  public class restPostType
  {
    public string name { get; set; }
  }
}
