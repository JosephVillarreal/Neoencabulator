import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import './App.css';

function App() {
    const axios = require('axios').default;

    const api = axios.create({
        baseURL: '/Users'
    })

    const [message, setMessage] = React.useState("");

  return (
      <div className="App">
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
                REST
             </Button>
        </div>
        <div>
              RESTful Replay: {message}
        </div>
    </div>
  );
}

export default App;
