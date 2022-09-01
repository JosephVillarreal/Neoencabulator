
import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

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
    axios.post('LinkedList/add', { item: input })
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
            assignResult(response);
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .then(function () {
            console.log("End of Axios Post");
        });
}

function LinkedListWorkspace() {

    const axios = require('axios');

    const api = axios.create({
        baseURL: '/Users'
    })

  const [name, setName] = useState("");
  const [message, setMessage] = useState("Whom?");


  const [weather, setWeather] = React.useState<string[]>();

  return (
    <div>
      <TextField
          label="John Doe"
          variant="filled"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button color="primary" variant="contained"
            onClick={() => {
                AddToLinkedList(name);
            }
            }>Submit Name
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
            axios.get('/Users')
              .then((response: any) => {
                console.log(response.data);
                setMessage(response.data);
              })
              .catch(function (error: any) {
                console.log(error);
              })
              .then(function () {
                console.log("End of Axios Get");
              });
          }
        }>
          {message ?? "#NAME?"}
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
              GetLinkedList(setWeather);
          }}
        >
          Get Weather
        </Button>
        <div>
          {weather ?? "Not yet assigned"}
      </div>
    </div>
  );
}
export default LinkedListWorkspace;