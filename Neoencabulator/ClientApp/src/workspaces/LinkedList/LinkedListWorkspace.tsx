
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

/*function GetLinkedList(assignResult: Function) {
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
}*/

function LinkedListWorkspace() {
  // https://www.google.com/search?q=react+map+index+bind+onchange&client=firefox-b-1-d&ei=vkSRY43LIvTQ9APJro7IDg&ved=0ahUKEwiNotP59ej7AhV0KH0KHUmXA-kQ4dUDCA8&uact=5&oq=react+map+index+bind+onchange&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgAToKCAAQRxDWBBCwAzoFCAAQkQI6BQgAEIAEOgUIABCGAzoGCAAQFhAeOggIIRAWEB4QHToFCCEQqwJKBAhBGABKBAhGGABQoQZYy7YBYKS4AWgBcAF4AYAB6AKIAZkVkgEINi4xMS4xLjGYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp
  // To get the location of the hidden rebel base: https://stackoverflow.com/questions/69227067/how-to-get-value-of-inputs-onchange-when-they-are-inside-map-function
  const [typed, setTyped] = useState<string[]>([]);
  const [linkedList, setLinkedList] = useState<singleNode[]>
    (
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
    );
  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    axios.get('LinkedList')
      .then((response: any) => {
        console.log(response);
        setLinkedList(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
      });
  }, []);

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