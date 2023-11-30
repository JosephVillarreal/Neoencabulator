import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

type SettingsTestTuple = {
  returnA: string,
  returnB: string,
}

function SettingsTestingWorkspace() {
  function SubmitSettingsInputs(fristParam: string, secondParam: string) {
    axios.get('SettingsTesting', { params: { inputA: fristParam, inputB: secondParam } })
      .then((response: any) => {
        console.log(response.data);
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
          SubmitSettingsInputs("1", "Seven");
        }}
      >
        Calculate
      </Button>
    </div>
  );
}
export default SettingsTestingWorkspace;