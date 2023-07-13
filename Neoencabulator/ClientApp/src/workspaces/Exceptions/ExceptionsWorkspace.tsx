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

function ExceptionsWorkspace() {
  const classes = useStyles();

  function runException(input: number) {
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

  const firstException: string =
`
This is the example text for the 1st exception question.Lora Ipsum.
`
  const secondException: string =
`
Baby blue buildings far above the crystal grove
Magenta plated terrace with a table and a stove
Guarded golden railing just to frame the pretty stars
Fix that old piano and the birds will fall apart
`
  const thirdException: string =
`
I was once a tree house
I lived in a cake
but i never saw the way
the orange slayed the rake
I was only three years dead
but it told a tale
and now listen little child
to the safety rail
`

  const [exceptionQuestion, setExceptionQuestion] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  function updateQuestionText(question: number) {
    switch (question) {
      case 1: {
        return firstException;
      }
      case 2: {
        return secondException;
      }
      case 3: {
        return thirdException;
      }
      default: {
        return "\nClick a question to begin.";
      }
    }
  }

  return (
    <div>
      <div>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(1);
          }}
        >
          1st Exception
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(2);
          }}
        >
          2nd Exception
        </Button>
        <Button color="primary" variant="contained"
          onClick={() => {
            setExceptionQuestion(3);
          }}
        >
          3rd Exception
        </Button>
      </div>
      <div className={classes.exceptionTextField}>
        {
          updateQuestionText(exceptionQuestion)
        }
      </div>
      <div>
        <Button color="primary" variant="contained"
          onClick={() => {
            runException(exceptionQuestion);
          }}
        >
          Run code
        </Button>
        <TextField
          inputProps={{ readOnly: true, value: result }}
          size="small"
          label="Result"
        />
      </div>
    </div>
  );
}
export default ExceptionsWorkspace;