using System;
using System.Collections.Generic;
using System.Linq;

namespace Neoencabulator.Logic
{
    public class LinkedListNode
    {
        public LinkedListNode()
        {
            id = new Guid();
            content = "";
            previous = null;
            next = null;
        }

        public Guid id;
        public string content;
        public LinkedListNode previous;
        public LinkedListNode next;
    }

    public static class LinkedListLogic
    {
        private static List<LinkedListNode> names = new List<LinkedListNode>();

        public static List<LinkedListNode> getList()
        {
            return names;
        }

        public static bool addNode(string name)
        {
            try
            {
                names.Add(new LinkedListNode
                {
                    content = name,
                    previous = names.LastOrDefault()
                }
                );
            }
            catch(System.Exception)
            {
                return false;
            }

            return true;
        }

        public static bool insertNode(string name, Guid location)
        {
            try
            {
                // A - C
                // A.next = C
                // C.previous = A

                // Insert B between A and C
                // A - B - C

                // B.previous = A
                // B.next = C
                // A.next = B, A could be null if C was the only item in the list.
                // C.previous = B

                var intermediary = names.Select((node, index) => new { node, index });
                var C = intermediary.FirstOrDefault(q => q.node.id == location);
                var A = C.node.previous;

                // B.previous = A
                // B.next = C
                var B = new LinkedListNode
                {
                    content = name,
                    previous = A,
                    next = C.node
                };
                // A.next = B, A could be null if C was the only item in the list.
                if(A != null)
                {
                    A.next = B;
                }

                // C.previous = B
                C.node.previous = B;

                names.Insert(C.index, B);
            }
            catch (System.Exception)
            {
                return false;
            }

            return true;
        }

        public static bool removeNode(Guid guid)
        {
            var B = names.FirstOrDefault(node => node.id == guid);
            var A = B.previous;
            var C = B.next;

            // A - B - C
            // Removing B
            // A.next = C
            // C.previous = A

            if (A != null)
            {
                A.next = C;
            }
            if (C != null)
            {
                C.previous = A;
            }

            return names.Remove(B);
        }
    }
}
