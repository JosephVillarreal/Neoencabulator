import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { MappedModule, MappedModuleProps } from './MappedModule';



type BackendDataProps = {
  id: string,
  item: string,
}

function LinkedListWorkspace() {
  function GetLinkedList() {
    axios.get('LinkedList')
      .then((response: any) => {
        console.log(response);
        let receivedData: MappedModuleProps[] = response.data.map((node: BackendDataProps) => {
          let nodeModule: MappedModuleProps = {
            id: node.id,
            content: node.item,
            insertContent: '',
            setInsertContentHandler: setTyped,
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

  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [linkedList, _setLinkedList] = useState<MappedModuleProps[]>([]);
  console.log("LinkedList: ", linkedList);
  const linkedListReference = useRef(linkedList);
  function setLinkedList(input: MappedModuleProps[]) {
    console.log("Updating LinkedList.");
    linkedListReference.current = input;
    _setLinkedList(input);
    console.log("LinkedList was updated.");
  }

  function setTyped(input: string, id: string) {
    let updatedList = [...linkedListReference.current];
    let node = updatedList?.find(node => node.id == id);
    if (node) {
      node.insertContent = input
    }
    else {
      return; // How did this happen? They have a node with a bad id.
    }
    _setLinkedList(updatedList);
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
      <div
        id="appendRowDiv"
        style={{ height: '50px' }}
      >
        <Button color="primary" variant="contained"
          onClick={() => {
            AddToLinkedList(name);
            setName('');
          }}
        >
          +
        </Button>
        <TextField
          value={name}
          onChange={handleChange}
          size="small"
        >
        </TextField>
      </div>
    </div>
  );
}
export default LinkedListWorkspace;