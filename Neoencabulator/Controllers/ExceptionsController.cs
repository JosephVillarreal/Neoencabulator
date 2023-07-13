using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic;
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
      string result = "";
      try
      {
        switch (input)
        {
          case 1:
            // result = FirstException();
            break;
          case 2:
            // result = SecondException();
            break;
          case 3:
            // result = ThirdException();
            break;
          default:
            throw new Exception();
        }
      }
      catch(Exception exception) // All exceptions
      {
        result = exception.Message;
      }
      return result;
    }
  }
}
