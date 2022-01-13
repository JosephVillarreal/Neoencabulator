import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import './App.css';

function App() {

  const [messge, setMessage] = useState("");

  return (
      <div className="App">
        <div>
            <Button color="primary" variant="contained">
                REST
             </Button>
        </div>
        <div>
                  RESTful Replay:
        </div>
    </div>
  );
}

export default App;
