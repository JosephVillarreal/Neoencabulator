import React, { useState } from 'react';
import WelcomeWorkspace from './workspaces/WelcomeWorkspace'
import LinkedListWorkspace from './workspaces/LinkedListWorkspace'
import { Button } from '@mui/material';
import useStyles from './topLevelStyles'

function App() {
   const classes = useStyles();

  enum workspace {
    welcome,
    linkedList
  }
  const [currentWorkspace, setCurrentWorkspace] = useState<workspace>(workspace.welcome);
    function getCurrentWorkspace() {
        switch (currentWorkspace) {
            case workspace.linkedList:
                return LinkedListWorkspace();
                break;
            default:
                return WelcomeWorkspace();
                break;
        }
    }

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
          {getCurrentWorkspace()}
        </div>
      </div>
    </div>
    );
}
export default App;
