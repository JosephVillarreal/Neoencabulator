namespace Neoencabulator.Logic.ExceptionsLogic
{
  public static partial class ExceptionsLogic
  {
    public static int ThirdException()
    {
      int i = 0;

      try
      {
        i++;
        i = ThirdHelper(i);
        i++;
      }
      catch (System.Exception exception)
      {
        i++;
      }
      finally
      {
        i++;
      }

      return i;
    }

    private static int ThirdHelper(int i)
    {
      i++;
      throw new System.Exception();
      i++;
      return i;
    }
  }
}
