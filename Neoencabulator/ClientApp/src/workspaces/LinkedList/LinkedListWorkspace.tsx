
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { MappedModule, MappedModuleProps } from './MappedModule';

/*
 * In this file, what I would like to do is:
 * Have a text form, and a button next to it that submits its value to the backend, while also clearing the value.
 * Have a button that when pressed, fetches a list of all the things submitted to the backend.
 * Foreach thing in the backend, write it out on screen with a button next to it to delete it.
 * 
 * Have the text box button's text be context sensitive. It starts out saying "Insert at front of list"
 * Let the user select from the list of things written on the screen, an item and an adjcent item.
 * When they are selected, change the insert's button to read something like "Insert between selected"
 * Have a button to "clear selection"
 */

type BackendDataProps = {
  id: string,
  item: string,
}

function LinkedListWorkspace() {
  function GetLinkedList() {
    axios.get('LinkedList')
      .then((response: any) => {
        console.log(response);
        //_setLinkedList(response.data);
        let receivedData = response.data.map((node: BackendDataProps) => {
          let nodeModule: MappedModuleProps = {
            id: node.id,
            content: node.item,
            insertContent: '',
            setInsertContentHandler: () => { },
            insertHandler: InsertToLinkedList,
            deleteHandler: RemoveFromLinkedList,
          }
          return nodeModule;
        });
        setLinkedList(receivedData);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
      });
  }

  function AddToLinkedList(input: string) {
    console.log("Added via Axios: ", input);
    axios.post('LinkedList/append', { item: input })
      .then((response: any) => {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post, getting LinkedList again");
        GetLinkedList();
      });
  }

  function InsertToLinkedList(id: string, input: string) {
    console.log("Added via Axios: ", input);
    axios.post('LinkedList/insert', { toInsert: input, beforeLocation: id })
      .then((response: any) => {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
        GetLinkedList();
      });
  }

  function RemoveFromLinkedList(id: string) {
    console.log("Removed via Axios: ", id);
    axios.post('LinkedList/remove', { id: id })
      .then((response: any) => {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
        GetLinkedList();
      });
  }

  const [typed, setTyped] = useState<string[]>([]);
  const [linkedList, _setLinkedList] = useState<MappedModuleProps[]>([]);
/*(
      [
        {
          id: "1",
          content: "Joe V",
          insertDelegate: (id: string, content: string) => { alert(`id=${id}, content=${content}`) },
          insertContent: "",
          setInsertContent: () => { },
          removeDelegate: (id: string, content: string) => { alert(`id=${id}, content=${content}`) }
        },
        {
          id: "2",
          content: "Was",
          insertDelegate: (id: string, content: string) => { alert(`id=${id}, content=${content}`) },
          insertContent: "",
          setInsertContent: () => { },
          removeDelegate: (id: string, content: string) => { alert(`id=${id}, content=${content}`) }
        }
      ]
    );*/
  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const linkedListReference = useRef(linkedList);
  function setLinkedList(input: MappedModuleProps[]) {
    console.log("Updating LinkedList.");
    linkedListReference.current = input;
    _setLinkedList(input);
    console.log("LinkedList was updated.");
  }

  type backendResponseNode = {
    id: string,
    content: string,
    previous: string,
    next: string,
  }

  useEffect(() => {
    GetLinkedList();
  }, []);

  return (
    <div>
      <div>
        {
          linkedList.map(node => (
            MappedModule(node)
          ))
        }
      </div>
      <div>
        <TextField value={name} onChange={handleChange}>
        </TextField>
        <Button color="primary" variant="contained"
          onClick={() => {
            AddToLinkedList(name);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}
export default LinkedListWorkspace;