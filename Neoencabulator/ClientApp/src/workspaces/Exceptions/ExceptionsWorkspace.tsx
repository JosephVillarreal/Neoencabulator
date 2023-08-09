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
int foo() {
  int i = 0;
  i++;
  throw new Exception();
  i++;
  return i;
}
`
  const secondException: string =
`
int foo() {
  int i = 0;
  i++;
  i = bar(i);
  i++;
  return i;
}

int bar(int i) {
  i++;
  throw new Exception();
  i++;
  return i;
}
`
  const thirdException: string =
`
int foo() {
  int i = 0;
  try {
    i++;
    i = bar(i);
    i++;
  }
  catch (Exception x) {
    i++;
  }
  finally {
    i++;
  }
  return i;
}

int bar(int i) {
  i++;
  throw new Exception();
  i++;
  return i;
}
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