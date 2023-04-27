import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField } from '@mui/material';

type BackendDataProps = {
  id: string,
  item: string,
}

function FactorialWorkspace() {
  function GetFactorial(input: number) {
    axios.get('Factorial')
      .then((response: any) => {
        console.log(response);
        return response;
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
      });
  }

  const [name, setName] = useState("");

  return (
    <div>

    </div>
  );
}
export default FactorialWorkspace;