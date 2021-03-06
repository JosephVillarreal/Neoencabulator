
import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function LinkedListWorkspace() {

    const axios = require('axios');

    const api = axios.create({
        baseURL: '/Users'
    })

  const [name, setName] = useState("");
  const [message, setMessage] = useState("Whom?");


  const [weather, setWeather] = React.useState<weatherForcast[]>();
  interface weatherForcast {
    date: string;
    tempC: number;
    tempF: number;
    summary: string;
  }


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
                console.log("Submitted to Axios: ", name);
              axios.post('/Users', { name: name })
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
            axios.get('/WeatherForecast')
              .then((response: any) => {
                console.log(response.data);
                setWeather(response.data);
              })
              .catch(function (error: any) {
                console.log(error);
              })
              .then(function () {
                console.log("End of Axios");
              });
          }}
        >
          Get Weather
        </Button>
        <div>
          {weather?.[0]?.summary ?? "Not yet assigned"}
      </div>
    </div>
  );
}
export default LinkedListWorkspace;