import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
// import useMediaQuery from '@mui/material/useMediaQuery';

const buttonresponsive={
    width:{
        xs:"320px",
        sm:"360px",
        md:"230px",
        lg:"290px",
        xl:"360px"
    }
}
export default function TeacherHomePage(){
   
    const Item = styled(Button)(() => ({
       color: "#1E1E1E",
       backgroundColor:"#FFFF",
       margin:"2px",
       marginTop:"20px",
       fontWeight:"bolder",
      }));
    return(
        <>
        <Grid
          container columns={{md:2, lg:3, xl:4 }}
          direction="row"
          justifyContent="flex-start"
          paddingLeft={{xs:10,sm:10,md:10,lg:20,xl:30}}
         
        >
        <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        
        >
        <img  src="images/Logo.png" alt="" />
        <h1>TechMe ICT</h1>
        </Stack>
        </Grid>
        
            <Grid > 
                <Item sx={buttonresponsive}>Create Class</Item>
                <Item sx={buttonresponsive}>Class</Item>
                <Item sx={buttonresponsive}>Lesson</Item>
                <Item sx={buttonresponsive}>Student Records</Item>
            </Grid>

         <Box sx={{
                marginTop:'10px',
                width:{
                    xs:350,
                    sm:740,
                    md:950,
                    lg:1200,
                    xl:1500
                } ,
                height: 600,
                backgroundColor: '#FFFFFF',
                borderRadius:'20px',
                
            }}
            />
        </>
    )
}