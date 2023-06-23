using Neoencabulator.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tests.FactorialTests
{
  public class FactorialTests
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

    [TestCase(3, 6)]
    [TestCase(1, 1)]
    [TestCase(0, 1)]
    [TestCase(-3, -1)] // negative number factorials can only be solved using limits.
    [TestCase(12, 479001600)] // 12 doesn't overflow int
    [TestCase(13, 1932053504)] // 13 does overflow int
    public void factorial_validInput_expectedResult(int input, int expected)
    {
      int result = FactorialLogic.calculateFactorial(input);
      Assert.That(result, Is.EqualTo(expected));
    }
  }
}
