import { Box, Button, Container, CssBaseline, Grid } from "@mui/material";
import React from "react";

export default function StudentHomePage(){
    return(
        <>
        <div className="LogoContainer">
              <img src="images/Logo.png" alt="" />
              <h1>TechMe ICT</h1>
          </div>
          <div id="HeaderBtn">
              <Grid>
               <Button id="BtnJclass" variant='contained'>Join Class</Button>
               <Button variant='contained'>Class</Button>
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
    </>
    )
}