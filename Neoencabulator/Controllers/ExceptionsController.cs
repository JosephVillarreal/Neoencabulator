using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic.ExceptionsLogic;
using System;

namespace Neoencabulator.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ExceptionsController : Controller
  {
    [HttpGet]
    public string Get(int input)
    {
      int readValue;
      string result = "";
      try
      {
        switch (input)
        {
          case 1:
            readValue = ExceptionsLogic.FirstException();
            result = readValue.ToString();
            break;
          case 2:
            readValue = ExceptionsLogic.SecondException();
            result = readValue.ToString();
            break;
          case 3:
            readValue = ExceptionsLogic.ThirdException();
            result = readValue.ToString();
            break;
          default:
            result = "Select an Exception Question.";
            break;
        }
      }
      catch(Exception exception) // Consume all expcetions.
      {
        result = exception.Message;
      }
      return result;
    }
  }
}
