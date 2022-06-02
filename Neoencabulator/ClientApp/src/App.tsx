import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import WelcomeWorkspace from './workspaces/WelcomeWorkspace'
import LinkedListWorkspace from './workspaces/LinkedListWorkspace'
import { Button } from '@mui/material';


const MyComponent = styled('div')({

});

function App() {

  enum workspace {
    welcome,
    linkedList
  }
  const [currentWorkspace, setCurrentWorkspace] = useState<workspace>(workspace.welcome);

  return (
    <div className="App">
      <div id="titleBar">
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
      <div id="mainBody">
        <div id="leftNavBar">
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
        <div id="workspace">
          {currentWorkspace === workspace.welcome && WelcomeWorkspace() }
          {currentWorkspace === workspace.linkedList && LinkedListWorkspace() }
        </div>
      </div>
    </div>
  );
}

export default App;
