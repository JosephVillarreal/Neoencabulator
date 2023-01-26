import { Button, TextField, Typography } from "@mui/material"
import React, { useState } from 'react';

type MappedModuleProps = {
  id: string,
  content: string,
  insertContent: string,
  setInsertContentHandler: Function,
  insertButtonHandler: Function,
  deleteHandler: Function,
}

function MappedModule(props: MappedModuleProps) {
  //const [content, setContent] = useState("");

  return (
    <>
      <TextField
        value={''}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
          {
            //setContent(e.target.value);
          }
        }
      >
      </TextField>
      <Button color="primary" variant="contained"
        onClick={() => {
          // We need to fix how our insert Axios call works.
          // It needs two inputs, the content name, and the id of this node (to insert in front of).
          props.insertButtonHandler(props.id, 'content');
        }}
      >
        +
      </Button>
      <br />
      <Typography>
        {
          props.content
        }
      </Typography>
      <Button color="primary" variant="contained"
        onClick={() => {
          props.deleteHandler(props.id);
        }}
      >
        -
      </Button>
    </>
  )
}

export { MappedModule };
export type { MappedModuleProps };