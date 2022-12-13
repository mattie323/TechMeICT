import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import './App.css';
import { TextField, Button, Select, MenuItem, Box, InputLabel, FormControl, Container } from '@mui/material';
import logo from './techmeictlogo-removebg-preview.png';

class RegisterStudent extends Component {
        state = {
            firstname: '',
            lastname: '',
            gender: '',
            username: '',
            password: '',
            schoolemail: '',
            type:''
        }
    handleChange1 = e => {
        this.setState({firstname: e.target.value});
    }
    handleChange2 = e => {
        this.setState({lastname: e.target.value});
    }
    handleChange3 = e => {
        this.setState({gender: e.target.value});
    }
    handleChange4 = e => {
        this.setState({username: e.target.value});
    }
    handleChange5 = e => {
        this.setState({password: e.target.value});
    }
    handleChange6 = e => {
        this.setState({schoolemail: e.target.value});
    }
    handleChange7 = e => {
        this.setState({type: e.target.value});
    }
    handleSubmit = e => {
        e.preventDefault();
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            username: this.state.username,
            password: this.state.password,
            schoolemail: this.state.schoolemail,
            type: this.state.type
        };
        StudentService.createUser(user).then(res =>{
            console.log(res);
            console.log(res.data);
            alert("Account Successfully Created!");
        })
    }
    render() {
        return (
            <div>
                <div className='App'>
                <img src={logo} alt=''></img>
                <div className='Register'>
                <h1>Sign up for Students</h1>
                <form onSubmit={this.handleSubmit}>
                    <TextField name='firstname' label='First Name' variant='outlined' sx={{width: '50ch', borderColor: 'white'}} onChange={this.handleChange1} required></TextField><br></br><br></br>
                    <TextField name='lastname' label='Last Name' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange2} required></TextField><br></br><br></br>
                    <TextField name='gender' label='Gender' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange3} required></TextField><br></br><br></br>
                    <TextField name='username' label='Username' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange4} required></TextField><br></br><br></br>
                    <TextField name='password' label='Password' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange5} type='password' required></TextField><br></br><br></br>
                    <TextField name='schoolemail' label='School Email' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange6} required></TextField><br></br><br></br>
                    <FormControl>
                        <InputLabel id="typelabel">Type</InputLabel>
                        <Select name='type' labelId='typelabel' label='Type' variant='outlined' sx={{width: '50ch'}} onChange={this.handleChange7} defaultValue="" required>
                        <MenuItem value={'S'}>Student</MenuItem>
                        <MenuItem value={'T'}>Teacher</MenuItem>
                    </Select>
                    </FormControl><br></br><br></br>
                    <Button variant='contained' style={{backgroundColor: 'white', color: 'black'}}>Back</Button> <Button variant='contained' type='submit' style={{backgroundColor: 'white', color: 'black'}}> Sign up </Button>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default RegisterStudent;