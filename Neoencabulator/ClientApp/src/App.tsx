import React, { useState } from 'react';
import WelcomeWorkspace from './workspaces/WelcomeWorkspace'
import LinkedListWorkspace from './workspaces/LinkedListWorkspace'
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  titleBar: {
    height: '100px'
  },
  contentBody: {
    display: 'flex',
    height: '100%'
  },
  navigationBar: {
    height: '100%',
    width: '100px',
    padding: '5px'
  },
  workspaceContent: {
    width: '100%',
    height: '100%',
    padding: '5px'
  }
});

function App() {
  const classes = useStyles();

  enum workspace {
    welcome,
    linkedList
  }
  const [currentWorkspace, setCurrentWorkspace] = useState<workspace>(workspace.welcome);

  return (
    <div>
      <div id="titleBar" className={classes.titleBar}>
        <Button
          id="titleBar-button"
          color="primary"
          variant="text"
          onClick={() => {
            console.log("Changed to workspace: welcome");
            setCurrentWorkspace(workspace.welcome);
          }
          }>
          Neo Encabulator
        </Button>
      </div>
      <div id="mainBody" className={classes.contentBody}>
        <div id="leftNavBar" className={classes.navigationBar}>
          <Button
            id="linkedList-workspace-button"
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Changed to workspace: linkedList");
              setCurrentWorkspace(workspace.linkedList);
            }
            }>
            Linked List
          </Button>
        </div>
        <div id="workspace" className={classes.workspaceContent}>
          {currentWorkspace === workspace.welcome && WelcomeWorkspace() }
          {currentWorkspace === workspace.linkedList && LinkedListWorkspace() }
        </div>
      </div>
    </div>
  );
}

export default App;
