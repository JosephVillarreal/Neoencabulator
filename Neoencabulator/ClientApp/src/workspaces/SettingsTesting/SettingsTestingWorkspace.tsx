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

  const [result, setResult] = useState<SettingsTestTuple>();
  const [settingA, setSettingA] = useState<string>("1");
  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettingA(event.target.value as unknown as string);
  };
  const [settingB, setSettingB] = useState<string>("1");
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettingB(event.target.value as unknown as string);
  };

  return (
    <div>
      Direcitons: You will be writing test cases for these two settings boxes, to confirm that the system will function as specified.
      <br />
      <br />
      <TextField
        label="Setting A"
        value={settingA}
        onChange={handleChangeA}
        size="small"
      >
      </TextField>
      <div>
        {" Range: 1 to 1000"}
      </div>
      <br />
      <br />
      <TextField
        label="Setting B"
        value={settingB}
        onChange={handleChangeB}
        size="small"
      >
      </TextField>
      <div>
        {" Range: 1 to the value of Setting A"}
      </div>
      <br />
      <br />
      <Button color="primary" variant="contained"
        onClick={() => {
        SubmitSettingsInputs(settingA, settingB);
        }}
      >
        Submit
      </Button>
    </div>
  );
}
export default SettingsTestingWorkspace;