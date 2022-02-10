import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import './App.css';

function App() {
    const axios = require('axios').default;

    const [message, setMessage] = React.useState("");

  return (
      <div className="App">
          <div>
              <Button color="primary" variant="contained"
                  onClick={() => {
                      axios.get('/user')
                          .then(function (response: string) {
                              console.log(response);
                              setMessage(response);
                          })
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
