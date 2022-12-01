﻿
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { NodeSection, singleNode } from './MappedComponent';

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
            console.log("End of Axios Post");
        });
}

function InsertToLinkedList(input: string) {
    console.log("Added via Axios: ", input);
    axios.post('LinkedList/insert', { item: input })
        .then((response: any) => {
            console.log(response);
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .then(function () {
            console.log("End of Axios Post");
        });
}

function RemoveFromLinkedList(input: string) {
    console.log("Removed via Axios: ", input);
    axios.post('LinkedList/remove', { item: input })
        .then((response: any) => {
            console.log(response);
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .then(function () {
            console.log("End of Axios Post");
        });
}

function GetLinkedList(assignResult: Function) {
    console.log("Got LinkedList via Axios");
    axios.get('LinkedList')
        .then((response: any) => {
            console.log(response);
            assignResult(response.data);
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .then(function () {
            console.log("End of Axios Post");
        });
}

function LinkedListWorkspace() {
  const [linkedList, setLinkedList] = useState<singleNode[]>
    (
      [
        {
          id: "1",
          content: "Joe V",
          insertDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") },
          insertContent: "",
          removeDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") }
        },
        {
          id: "2",
          content: "Was",
          insertDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") },
          insertContent: "",
          removeDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") }
        },
        {
          id: "3",
          content: "Here",
          insertDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") },
          insertContent: "",
          removeDelegate: (id: string, content: string) => { alert("id=$(id), content=$(content)") }
        }
      ]
    );
  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  //useEffect(() => {
  //  GetLinkedList(setLinkedList)
  //}, [linkedList]);

  return (
    <div>
      <div>
        {
          linkedList.map(node => (
            NodeSection(node)
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