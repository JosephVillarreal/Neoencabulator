import { Button, TextField, Typography } from "@mui/material"
import React from 'react';

type MappedModuleProps = {
  id: string,
  content: string,
  insertContent: string,
  setInsertContentHandler: Function,
  insertHandler: Function,
  deleteHandler: Function,
}

function MappedModule(props: MappedModuleProps) {
  return (
    <>
      <TextField
        value={props.insertContent}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
          {
            props?.setInsertContentHandler(e.target.value, props.id);
          }
        }
      >
      </TextField>
      <Button color="primary" variant="contained"
        onClick={() => {
          props.insertHandler(props.id, props.insertContent);
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