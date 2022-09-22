using Moq;
using Neoencabulator.Controllers;
using Microsoft.Extensions.Logging;
using Neoencabulator.Logic;

namespace Tests.LinkedListTests
{
    public class Tests
    {
        LinkedListController testObject = null;

        [SetUp]
        public void Setup()
        {
            
            testObject = new LinkedListController(Mock.Of<ILogger<LinkedListController>>());
        }

        [TearDown]
        public void Teardown()
        {
            LinkedListLogic.getList().Clear();
        }

        /*
        [Test]
        public void AddSingleItem()
        {
            LinkedListPoco MyPoco = new LinkedListPoco();
            MyPoco.item = "testString";
            testObject.AddItem(MyPoco);
            var storedList = LinkedListLogic.getList();
            Assert.Contains("testString", storedList);
        }

        [Test]
        public void RemoveSingleItem()
        {
            LinkedListLogic.addNode("RemoveMe");
            LinkedListPoco MyPoco = new LinkedListPoco();
            MyPoco.item = "RemoveMe";
            testObject.RemoveName(MyPoco);
            var storedList = LinkedListLogic.getList();
            Assert.IsEmpty(storedList);
        }

        [Test]
        public void GetList()
        {
            LinkedListLogic.addNode("FindMe");
            Assert.Contains("FindMe", testObject.Get());
        }
        */
        // New tests to add:
        /*
         * add to an empty list  // AddSingleItem
         * add to an a list that already has an item
         * 
         * insert at the head of the list
         * insert at an interior node in the list
         * 
         * remove from a list with only one item    // RemoveSingleItem
         * remove the head from a list with only two items
         * remove the tail from a list with only two items
         * remove an interior node
         */
    }
}