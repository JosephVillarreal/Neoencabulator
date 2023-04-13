import { Button, TextField } from "@mui/material"
import React from 'react';

type LinkedListNodeComponentProps = {
  id: string,
  content: string,
  insertContent: string,
  setInsertContentHandler: Function,
  insertHandler: Function,
  deleteHandler: Function,
}

function LinkedListNodeComponent(props: LinkedListNodeComponentProps) {
  return (
    <div>
      <div
        id="stop"
        style={{ height: '50px' }}
      >
        <Button color="primary" variant="contained"
          onClick={() => {
            props.insertHandler(props.id, props.insertContent);
          }}
        >
          +
        </Button>
        <TextField
          value={props.insertContent}
          onChange={
            (e: React.ChangeEvent<HTMLInputElement>) =>
            {
              props?.setInsertContentHandler(e.target.value, props.id);
            }
          }
          size="small"
        >
        </TextField>
      </div>
      <div
        id="appendRowDiv"
        style={{ display: 'flex', height: '50px' }}
      >
        <Button color="primary" variant="contained"
          onClick={() => {
            props.deleteHandler(props.id);
          }}
          style={{ height: '36.5px' }}
        >
          -
        </Button>
        <TextField
          inputProps={{ readOnly: true, value: props.content }}
          size="small"
        />
      </div>
    </div>
  )
}

export { LinkedListNodeComponent };
export type { LinkedListNodeComponentProps };