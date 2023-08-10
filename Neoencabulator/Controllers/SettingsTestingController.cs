using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic;
using Neoencabulator.Logic.ExceptionsLogic;
using System;

namespace Neoencabulator.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class SettingsTestingController : Controller
  {
    [HttpGet]
    public string Get(string input)
    {
      return input;
    }

    [HttpGet]
    public string Get(string inputOne, string inputTwo)
    {
      return (inputOne+inputTwo);
    }
  }
}
