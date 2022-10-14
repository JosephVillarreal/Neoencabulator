using Moq;
using Neoencabulator.Controllers;
using Microsoft.Extensions.Logging;
using Neoencabulator.Logic;

namespace Tests.LinkedListTests
{
    public class LogicTests
    {
        [SetUp]
        public void Setup()
        {
            LinkedListLogic.getList().Clear();
        }

        [TearDown]
        public void Teardown()
        {
            LinkedListLogic.getList().Clear();
        }

        [Test]
        public void AddSingleItem()
        {
            LinkedListLogic.addNode("TestThing");
            Assert.That(LinkedListLogic.getList().Count, Is.EqualTo(1));
            Assert.That(LinkedListLogic.getList().Select(node => node.content).FirstOrDefault(),
                Is.EqualTo("TestThing"));
        }

        [Test]
        public void AddMutipleItems()
        {
            LinkedListLogic.addNode("TestThingA");
            LinkedListLogic.addNode("TestThingB");
            Assert.That(LinkedListLogic.getList().Count, Is.EqualTo(2));
            // I am relying here on Select() to not change the order of things as it acts.
            Assert.That(LinkedListLogic.getList().Select(node => node.content).ToList(),
                Is.EqualTo(new List<string> { "TestThingA", "TestThingB" }));
        }

        [Test]
        public void InsertItemAtFront()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            var guidLocation = LinkedListLogic.getList().FirstOrDefault().id;
            LinkedListLogic.addNode("BaseB");

            // Insert our node at the front of the list
            LinkedListLogic.insertNode("TestThing", guidLocation);

            // First, get the node we just added
            var newNode = LinkedListLogic.getList().FirstOrDefault();
            // Get the original front node
            var oldNode = LinkedListLogic.getList().Skip(1).FirstOrDefault();

            // Check our pointer connections
            Assert.That(newNode.previous, Is.EqualTo(null));
            Assert.That(newNode.next, Is.EqualTo(oldNode));
            Assert.That(oldNode.previous, Is.EqualTo(newNode));
        }

        [Test]
        public void InsertItemAtInterior()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            LinkedListLogic.addNode("BaseB");
            var guidLocation = LinkedListLogic.getList().Skip(1).FirstOrDefault().id;

            // Insert our node at the front of the list
            LinkedListLogic.insertNode("TestThing", guidLocation);

            // First, get the node we just added
            var frontNode = LinkedListLogic.getList().FirstOrDefault();
            // Get the front node
            var newNode = LinkedListLogic.getList().Skip(1).FirstOrDefault();
            // Get the end node
            var endNode = LinkedListLogic.getList().LastOrDefault();

            // Ensure that the end node is the node we inserted infront of
            Assert.That(endNode.id, Is.EqualTo(guidLocation));

            // Ensure all nodes have the correct content
            Assert.That(frontNode.content, Is.EqualTo("BaseA"));
            Assert.That(newNode.content, Is.EqualTo("TestThing"));
            Assert.That(endNode.content, Is.EqualTo("BaseB"));

            // Check our pointer connections
            // Check the front node
            Assert.That(frontNode.previous, Is.EqualTo(null));
            Assert.That(frontNode.next, Is.EqualTo(newNode));
            // Check the newly added interior node
            Assert.That(newNode.previous, Is.EqualTo(frontNode));
            Assert.That(newNode.next, Is.EqualTo(endNode));
            // Check the end node
            Assert.That(endNode.previous, Is.EqualTo(newNode));
            Assert.That(endNode.next, Is.EqualTo(null));
        }

        [Test]
        public void InsertItemAtEnd()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");

            // Insert our node at the end of the list
            LinkedListLogic.addNode("TestThing");

            // Get both the nodes
            var firstNode = LinkedListLogic.getList().FirstOrDefault();
            // Get the original front node
            var newNode = LinkedListLogic.getList().Skip(1).FirstOrDefault();

            // Check our content
            Assert.That(firstNode.content, Is.EqualTo("BaseA"));
            Assert.That(newNode.content, Is.EqualTo("TestThing"));

            // Check our pointer connections
            Assert.That(firstNode.previous, Is.EqualTo(null));
            Assert.That(firstNode.next, Is.EqualTo(newNode));
            Assert.That(newNode.previous, Is.EqualTo(firstNode));
            Assert.That(newNode.next, Is.EqualTo(null));
        }

        [Test]
        public void RemoveOnlyItemInList()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("TestThing");

            // Get the only item in the list
            var onlyNode = LinkedListLogic.getList().FirstOrDefault();

            // Remove the item from the list
            LinkedListLogic.removeNode(onlyNode.id);

            // Ensure that the list is empty
            Assert.That(LinkedListLogic.getList().Count(), Is.EqualTo(0));
        }

        [Test]
        public void RemoveItemFromFront()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            LinkedListLogic.addNode("BaseB");

            // Get the front item in the list
            var frontNode = LinkedListLogic.getList().FirstOrDefault();

            // Remove the item from the list
            LinkedListLogic.removeNode(frontNode.id);

            // Ensure that the list now has only 1 item
            Assert.That(LinkedListLogic.getList().Count(), Is.EqualTo(1));

            // and that it's pointers are null
            var remainingNode = LinkedListLogic.getList().FirstOrDefault();
            Assert.That(remainingNode.previous, Is.EqualTo(null));
            Assert.That(remainingNode.next, Is.EqualTo(null));
        }

        [Test]
        public void RemoveItemFromEnd()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            LinkedListLogic.addNode("BaseB");

            // Get the front item in the list
            var endNode = LinkedListLogic.getList().Skip(1).FirstOrDefault();

            // Check that we actually grabbed the end node
            Assert.That(endNode.content, Is.EqualTo("BaseB"));
            Assert.That(endNode.next, Is.EqualTo(null));

            // Remove the item from the list
            LinkedListLogic.removeNode(endNode.id);

            // Ensure that the list now has only 1 item
            Assert.That(LinkedListLogic.getList().Count(), Is.EqualTo(1));

            // And that its pointers are null
            var remainingNode = LinkedListLogic.getList().FirstOrDefault();
            Assert.That(remainingNode.previous, Is.EqualTo(null));
            Assert.That(remainingNode.next, Is.EqualTo(null));

            // And that its content is correct
            Assert.That(remainingNode.content, Is.EqualTo("BaseA"));
        }

        [Test]
        public void RemoveItemFromInterior()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            LinkedListLogic.addNode("BaseB");
            LinkedListLogic.addNode("BaseC");

            // Get the middle item in the list
            var middleNode = LinkedListLogic.getList().Skip(1).FirstOrDefault();

            // Check that we actually grabbed the end node
            Assert.That(middleNode.content, Is.EqualTo("BaseB"));
            var endNode = LinkedListLogic.getList().LastOrDefault();
            Assert.That(middleNode.next, Is.EqualTo(endNode));

            // Remove the item from the list
            LinkedListLogic.removeNode(middleNode.id);

            // Ensure that the list now has 2 items
            Assert.That(LinkedListLogic.getList().Count(), Is.EqualTo(2));

            // And that their pointers and content are correct
            var frontNode = LinkedListLogic.getList().FirstOrDefault();
            // front node
            Assert.That(frontNode.content, Is.EqualTo("BaseA"));
            Assert.That(frontNode.previous, Is.EqualTo(null));
            Assert.That(frontNode.next, Is.EqualTo(endNode));

            //end node
            Assert.That(endNode.content, Is.EqualTo("BaseC"));
            Assert.That(endNode.previous, Is.EqualTo(frontNode));
            Assert.That(endNode.next, Is.EqualTo(null));
        }

        [Test]
        public void GetAllItems()
        {
            // Create some list for us to use.
            LinkedListLogic.addNode("BaseA");
            LinkedListLogic.addNode("BaseB");
            LinkedListLogic.addNode("BaseC");

            // Ensure that we can get them (all other tests incorporate this test as well)
            Assert.That(LinkedListLogic.getList().Count(), Is.EqualTo(3));

            // And that they are the right items, in the right order
            Assert.That(LinkedListLogic.getList().Skip(0).FirstOrDefault().content, Is.EqualTo("BaseA"));
            Assert.That(LinkedListLogic.getList().Skip(1).FirstOrDefault().content, Is.EqualTo("BaseB"));
            Assert.That(LinkedListLogic.getList().Skip(2).FirstOrDefault().content, Is.EqualTo("BaseC"));
        }
    }
}