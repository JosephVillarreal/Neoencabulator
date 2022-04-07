import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import './App.css';

function App() {
    const axios = require('axios').default;

    const api = axios.create({
        baseURL: '/Users'
    })

    const [message, setMessage] = React.useState("Whom");
    const [weather, setWeather] = React.useState();

  /*
  https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio
 
  (5) [{…}, {…}, {…}, {…}, {…}]
  0:
  date: "2022-04-07T21:32:07.5189826-07:00"
  summary: "Chilly"
  temperatureC: 11
  temperatureF: 51
  [[Prototype]]: Object
  1: {date: '2022-04-08T21:32:07.5189897-07:00', temperatureC: -17, temperatureF: 2, summary: 'Balmy'}
  2: {date: '2022-04-09T21:32:07.5189909-07:00', temperatureC: -3, temperatureF: 27, summary: 'Balmy'}
  3: {date: '2022-04-10T21:32:07.5189916-07:00', temperatureC: -5, temperatureF: 24, summary: 'Hot'}
  4: {date: '2022-04-11T21:32:07.518992-07:00', temperatureC: -3, temperatureF: 27, summary: 'Freezing'}
  length: 5
  [[Prototype]]: Array(0)
  */
  const weatherText = {
    var text = "";
    weather.forEach( weatherObject => text = ...text + weatherObject.temperatureC )
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
          weatherText
        </div>
      </div>
    </div>
  );
}

export default App;
