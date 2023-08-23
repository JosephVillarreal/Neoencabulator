namespace Neoencabulator.Logic.ExceptionsLogic
{
  public static partial class ExceptionsLogic
  {
    public static int FirstException()
    {
      int i = 0;
      i++;
      throw new System.Exception();
      i++;
      return i;
    }
  }
}
