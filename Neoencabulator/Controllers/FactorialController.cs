using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic;

namespace Neoencabulator.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class FactorialController : Controller
  {
    [HttpGet]
    public int Get(int input)
    {
      int result;
      try
      {
        result = FactorialLogic.calculateFactorial(input);
      }
      catch // All exceptions
      {
        result = int.MinValue;
      }
      return result;
    }
  }
}
