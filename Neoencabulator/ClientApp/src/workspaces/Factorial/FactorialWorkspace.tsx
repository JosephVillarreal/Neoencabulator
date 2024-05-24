import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function FactorialWorkspace() {
  function GetFactorial(input: number) {
    axios.get('Factorial', { params: { input: input } })
      .then((response: any) => {
        console.log(response);
        setResult(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {
        console.log("End of Axios Post");
      });
  }

  const [result, setResult] = useState<number>();
  const [number, setNumber] = useState<number>(1);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value as unknown as number);
  };

  return (
    <div>
      <Button color="primary" variant="contained" disabled={(number == undefined || number == null)}
        onClick={() => {
          GetFactorial(number);
        }}
      >
        Calculate
      </Button>
      <TextField
        inputProps={{ type: 'number' }}
        value={number}
        onChange={handleChange}
        size="small"
      >
      </TextField>
      <br />
      <br />
      {"Result: " + (result === undefined ? "" : result)}
    </div>
  );
}
export default FactorialWorkspace;
