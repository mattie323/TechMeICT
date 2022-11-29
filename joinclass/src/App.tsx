import React from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';

function App() {
  return (
  <><div className="App-header">
      <img src='techmeictlogo-removebg-preview.png' alt=''></img>
      <div className='App-link'>
        <h1 className='sizefont1'>Join a Class</h1><br></br>
        <h2>Enter the Class Code</h2>
        <TextField variant='standard' label="Class Code" size='medium'></TextField>
        <br></br><br></br>
        <br></br><br></br>
        <div className='App-header'>
          <Button variant="contained" size="large">Join</Button>
        </div>
      </div>
  </div>
  </>
  );
}

export default App;
