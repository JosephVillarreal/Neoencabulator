using Microsoft.AspNetCore.Components.Web;
using System.Linq.Expressions;

namespace Neoencabulator.Logic
{
  public static class SettingsTestingLogic
  {
    public static (string A, string B) evaluateSettings(string inputA, string inputB)
    {
      string returnA = "error";
      string returnB = "error";
      float parsedA = float.NaN;

      if (float.TryParse(inputA, out parsedA) && (parsedA > 0 && parsedA < 1000))
      {
        returnA = "true";
        if (float.TryParse(inputB, out float parsedB) && (parsedB > 0 && parsedB < parsedA))
        {
            returnB = "true";
        }
      }

      return (returnA, returnB);
    }
  }
}
