using Microsoft.AspNetCore.Mvc;

namespace Neoencabulator.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class RecursionController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }
  }
}
