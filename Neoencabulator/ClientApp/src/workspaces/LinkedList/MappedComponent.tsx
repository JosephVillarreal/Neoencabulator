import { Button, TextField, Typography } from "@mui/material"
import React, { useState } from 'react';

type singleNode = {
  id: string,
  content: string,
  insertDelegate: Function,
  insertContent: string,
  removeDelegate: Function,
}

function NodeSection(input: singleNode) {
  const [content, setContent] = useState("");

  return (
    <>
      <TextField
        value={content}
        onChange={
          (e: React.ChangeEvent<HTMLInputElement>) =>
          {
            setContent(e.target.value);
          }
        }
      >
      </TextField>
      <Button color="primary" variant="contained"
        onClick={() => {
          // We need to fix how our insert Axios call works.
          // It needs two inputs, the content name, and the id of this node (to insert in front of).
          input.insertDelegate(input.id, content);
        }}
      >
        +
      </Button>
      <br />
      <Typography>
        {
          input.content
        }
      </Typography>
      <Button color="primary" variant="contained"
        onClick={() => {
          input.removeDelegate(input.id, input.content);
        }}
      >
        -
      </Button>
    </>
  )
}

export { NodeSection };
export type { singleNode };
