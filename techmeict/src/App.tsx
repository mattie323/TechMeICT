import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Container, CssBaseline, Grid } from '@mui/material';
import logoComp from './Components/logocomp';

function App() {
  return (
    <div className="App-header"> 
          <div className="LogoContainer">
              <img src="images/Logo.png" alt="" />
              <h1>TechMe ICT</h1>
          </div>
          <div id="HeaderBtn">
              <Grid>
               <Button id="BtnJclass" variant='contained'>Join Classes</Button>
               <Button variant='contained'>Classes</Button>
               <Button variant='contained'>Profile</Button>
               <Button id="BtnRecords" variant='contained'>Your Records</Button>
              </Grid>
          </div>
            <React.Fragment>
      <CssBaseline />
      <Container>
        <Box id='Box'>
         
        </Box>
      </Container>
    </React.Fragment>
      </div>

  );
}

export default App;
