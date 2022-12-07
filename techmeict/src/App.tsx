import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import logoComp from './Components/logocomp';
import TeacherHomePage from './Components/HomePageTeacher';
import StudentHomePage from './Components/HomePageStudent';

function App() {
  return (
    <div className="App-header"> 
          <StudentHomePage/>
          {/* <TeacherHomePage/> */}
      </div>
  );
}

export default App;
