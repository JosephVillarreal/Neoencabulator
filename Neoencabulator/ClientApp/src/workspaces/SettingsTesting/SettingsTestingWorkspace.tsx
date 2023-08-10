import { makeStyles } from '@mui/styles';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const useStyles = makeStyles({
  exceptionTextField: {
    whiteSpace: 'pre-wrap',
    height: '500px',
    width: '500px'
  }
});

function SettingsTestingWorkspace() {
  const classes = useStyles();

  function runSingle(input: string) {
    axios.get('Exceptions', { params: { input: input } })
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
  function runDouble(inputOne: string, inputTwo: string) {
    axios.get('Exceptions', { params: { inputA: inputOne, inputB: inputTwo } })
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

  const [exceptionQuestion, setExceptionQuestion] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  return (
    <div>
      <div>
        <TextField
          inputProps={{ readOnly: true, value: result }}
          size="small"
          label="Result"
        />
      </div>
    </div>
  );
}
export default SettingsTestingWorkspace;