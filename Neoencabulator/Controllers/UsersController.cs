using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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
        public void Set(string input)
        {
            Name = input;
        }

        [HttpGet]
        public string Get()
        {
            return Name;
        }
    }
}
