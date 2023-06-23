import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';

function ExceptionsWorkspace() {
  function runException(input: number) {
    axios.get('Exception', { params: { input: input } })
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

  const firstException:string = "This is the example text for the 1st exception question. Lora Ipsum."
  const secondException:string = "Baby blue buildings far above the crystal grove/nMagenta plated terrace with a table and a stove/nGuarded golden railing just to frame the pretty stars/nFix that old piano and the birds will fall apart"
  const thirdException:string = "I was once a tree house/nI lived in a cake/nbut i never saw the way/nthe orange slayed the rake/nI was only three years dead/nbut it told a tale/nand now listen little child/nto the safety rail"

  const [exceptionQuestion, setExceptionQuestion] = useState<number>(0);
  const [result, setResult] = useState<string>(firstException);

  return (
    <div>
      <div>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(0);
          }}
        >
          1st Exception
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(0);
          }}
        >
          2st Exception
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(0);
          }}
        >
          3st Exception
        </Button>
      </div>
      <div>
        <br/>
        <br/>
        I want this text area to be a constant height, but change the text based on exceptionQuestion selection.
        <br/>
        <br/>
      </div>
      <div>
        <Button color="primary" variant="contained"
          onClick={() => {
            runException(exceptionQuestion);
          }}
        >
          Run code
        </Button>
      </div>
    </div>
  );
}
export default ExceptionsWorkspace;