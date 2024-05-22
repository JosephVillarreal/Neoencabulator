using Neoencabulator.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tests.SettingsTestingTests
{
  public class SettingsTestingTests
  {
    [SetUp]
    public void Setup()
    {
      // No set up is required.
    }

    [TearDown]
    public void Teardown()
    {
      // No tear down is required.
    }

    // Test cases are {inputA}, {expected validity of input A}, {inputB}, {expected validity of inputB}"
    // [TestCase("", , "", )]
    public void settingsTesting_input_expectedResult(string inputA, bool validA, string inputB, bool validB)
    {
      (string resultA, string resultB) = SettingsTestingLogic.evaluateSettings(inputA, inputB);
      Assert.That((resultA != "error"), Is.EqualTo(validA));
      Assert.That((resultB != "error"), Is.EqualTo(validB));
    }
  }
}
