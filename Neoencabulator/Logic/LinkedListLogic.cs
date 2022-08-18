using System.Collections.Generic;

namespace Neoencabulator.Logic
{
    public static class LinkedListLogic
    {
        private static List<string> names = new List<string>();

        public static List<string> getList()
        {
            return names;
        }

        public static bool addNode(string name)
        {
            try
            { // Is add even capable of throwing?
                names.Add(name);
            }
            catch(System.Exception)
            {
                return false;
            }

            return true;
        }

        public static bool removeNode(string name)
        {
            return names.Remove(name);
        }
    }
}
