import React, { useState } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import WelcomeWorkspace from './workspaces/WelcomeWorkspace'
import LinkedListWorkspace from './workspaces/LinkedList/LinkedListWorkspace'
import FactorialWorkspace from './workspaces/Factorial/FactorialWorkspace';
import ExceptionsWorkspace from './workspaces/Exceptions/ExceptionsWorkspace';
import SettingsTestingWorkspace from './workspaces/SettingsTesting/SettingsTestingWorkspace';

const useStyles = makeStyles({
  titleBarButton: {
    height: '100px',
    width: '100%'
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
  },
  standardSizedButton: {
    width: '100px',
    height: '50px'
  }
});

function App() {
   const classes = useStyles();

  enum workspace {
    welcome,
    linkedList,
    factorial,
    exceptions,
    settingsTesting
  }
  const [currentWorkspace, setCurrentWorkspace] = useState<workspace>(workspace.welcome);
  function getCurrentWorkspace() {
    switch (currentWorkspace) {
      case workspace.linkedList:
        return <LinkedListWorkspace/>
      case workspace.factorial:
        return <FactorialWorkspace />
      case workspace.exceptions:
        return <ExceptionsWorkspace />
      case workspace.settingsTesting:
        return <SettingsTestingWorkspace />
      default:
        return <WelcomeWorkspace/>
    }
  }

  return (
    <div>
      <div id="titleBar">
        <Button
          id="titleBar-button"
          className={classes.titleBarButton}
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
            className={classes.standardSizedButton}
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Changed to workspace: linkedList");
              setCurrentWorkspace(workspace.linkedList);
            }
            }>
            Linked List
          </Button>
          <Button
            id="factorial-workspace-button"
            className={classes.standardSizedButton}
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Changed to workspace: factorial");
              setCurrentWorkspace(workspace.factorial);
            }
            }>
            Factorial
          </Button>
          <Button
            id="exceptions-workspace-button"
            className={classes.standardSizedButton}
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Changed to workspace: exceptions");
              setCurrentWorkspace(workspace.exceptions);
            }
            }>
            Exceptions
          </Button>
          <Button
            id="settings-testing-workspace-button"
            className={classes.standardSizedButton}
            color="primary"
            variant="contained"
            onClick={() => {
              console.log("Changed to workspace: settingsTesting");
              setCurrentWorkspace(workspace.settingsTesting);
            }
            }>
            Settings Testing
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
