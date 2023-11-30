using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic;
using System;

namespace Neoencabulator.Controllers
{
  public class SettingsTestTuple
  {
    // The structure in this type, must match the POST request object's body EXACTLY. Including names.
    public string returnA { get; set; }
    public string returnB { get; set; }
  }

  [ApiController]
  [Route("[controller]")]
  public class SettingsTestingController : Controller
  {
    [HttpGet]
    public SettingsTestTuple Get(string inputA, string inputB)
    {
      bool A = (inputA == inputB);
      SettingsTestTuple returnValue = new SettingsTestTuple {returnA =  A.ToString(), returnB = inputB };
      return returnValue;
    }
  }
}
