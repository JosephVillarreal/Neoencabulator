using Microsoft.AspNetCore.Mvc;
using Neoencabulator.Logic;

namespace Neoencabulator.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class SettingsTestingController : Controller
  {
    [HttpGet]
    public (bool A, bool B) Get(string inputA, string inputB)
    {
      bool A = (inputA == inputB);
      return (A, false);
    }
  }
}
