namespace Neoencabulator.Logic
{
  public static class FactorialLogic
  {
    public static int calculateFactorial(int input)
    {
      if (input < 0)
      {
        return -1;
      }
      if (input == 0 || input == 1)
      {
        return 1;
      }

      return input * calculateFactorial(input - 1);
    }
  }
}
