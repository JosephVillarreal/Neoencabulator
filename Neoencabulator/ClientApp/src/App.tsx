import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './App.css';

function App() {
    const axios = require('axios').default;

    const api = axios.create({
        baseURL: '/Users'
    })

  const [message, setMessage] = React.useState("Whom?");

  const [weather, setWeather] = React.useState<weatherForcast[]>();
  interface weatherForcast {
    date: string;
    tempC: number;
    tempF: number;
    summary: string;
  }

  return (
    <div className="App">
    <div>
      <h1>
        Neo Encabulator
      </h1>
    </div>
    <div>
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
              console.log("End of Axios");
            });
        }
      }>
        {message}
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
    </div>
  );
}

export default App;
