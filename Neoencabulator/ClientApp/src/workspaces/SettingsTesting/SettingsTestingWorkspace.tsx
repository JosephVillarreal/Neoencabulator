import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function SettingsTestingWorkspace() {
  function SubmitSettingsInputs(input: number) {
    axios.get('SettingsInputs', { params: { input: input } })
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

  return (
    <div>
      <Button color="primary" variant="contained" disabled={(number == undefined || number == null)}
        onClick={() => {
          SubmitSettingsInputs(number);
        }}
      >
        Calculate
      </Button>
    </div>
  );
}
export default SettingsTestingWorkspace;