namespace Neoencabulator.Logic.ExceptionsLogic
{
  public static partial class ExceptionsLogic
  {
    public static int SecondException()
    {
      int i = 0;
      i++;
      i = SecondHelper(i);
      i++;
      return i;
    }

    private static int SecondHelper(int i)
    {
      i++;
      throw new System.Exception();
      i++;
      return i;
    }
  }
}
