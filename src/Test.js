import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, Stack } from '@mui/system';
import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography'
import React, { useState } from 'react';
import { TextField } from '@mui/material';

export class Test extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
    currentQuestion: 0,
    totalQuestions: 5,
    finalQuestion: false,
    name: '',
    email: '',
    educ: '',
    school: '',
    employer: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;    
    const id = target.id;
    this.setState({
      [id]: target.value
    });
  }
  
  toNext() {
    const currentQuestion = this.state.currentQuestion;
    const totalQuestions = this.state.totalQuestions;
    if (currentQuestion !== totalQuestions-1){
      this.setState({
        currentQuestion: currentQuestion+1  
    });
  }
  }

  toBack() {
    const currentQuestion = this.state.currentQuestion
    if (currentQuestion !== 0){
    this.setState({
      currentQuestion: currentQuestion-1
    });
    }
  }

  toSpecific(i) {
    const currentQuestion = this.state.currentQuestion
    this.setState({
      currentQuestion: i
    });
  }

  render() {
    const cq = this.state.currentQuestion;
    const questions = [{
      questionText: 'What is your name?',
      answerOptions: [<TextField
                      sx = {{width: 300}}
                      InputProps={{ sx: { height: 50 , fontSize : 25} }}
                      InputLabelProps={{ sx: {fontSize : 25 }}}
                      id="name"
                      label="Full name" 
                      variant="standard" 
                      value={this.state.name}
                      onChange={this.handleInputChange}>
                      </TextField>],
      questionType: 'ER',
      answer: this.state.name
      }, {
      questionText: 'What is your email?',
      answerOptions: [<TextField
                        sx = {{width: 300}}
                        InputProps={{ sx: { height: 50 , fontSize : 25} }}
                        InputLabelProps={{ sx: {fontSize : 25 }}}
                        id="email"
                        label="Email" 
                        variant="standard" 
                        value={this.state.email}
                        onChange={this.handleInputChange}>
                        </TextField>],
      questionType: 'ER',
      answer: this.state.email
      }, { 
      questionText: 'Highest level of education?',
      answerOptions: [<TextField
                      sx = {{width: 300}}
                      InputProps={{ sx: { height: 50 , fontSize : 25} }}
                      InputLabelProps={{ sx: {fontSize : 25 }}}
                      id="educ" 
                      label="Education" 
                      variant="standard"
                      value={this.state.educ}
                      onChange={this.handleInputChange}>
                      </TextField>],
      questionType: 'ER',
      answer: this.state.educ
      }, { 
      questionText: 'School last attended',
      answerOptions: [<TextField
                        sx = {{width: 300}}
                        InputProps={{ sx: { height: 50 , fontSize : 25} }}
                        InputLabelProps={{ sx: {fontSize : 25 }}}
                        id="school" 
                        label="School" 
                        variant="standard"
                        value={this.state.school}
                        onChange={this.handleInputChange}>
                        </TextField>],
        questionType: 'ER',
        answer: this.state.school
        }, { 
        questionText: 'Current employer',
        answerOptions: [<TextField
                          sx = {{width: 300}}
                          InputProps={{ sx: { height: 50 , fontSize : 25} }}
                          InputLabelProps={{ sx: {fontSize : 25 }}}
                          id="employer" 
                          label="Employer" 
                          variant="standard"
                          value={this.state.employer}
                          onChange={this.handleInputChange}>
                          </TextField>],
        questionType: 'ER',
        answer: this.state.employer
        }]

    const progress = questions.map((question, index) => {
        if (question.answer === '') {
          return (
          <Button 
            variant="contained"
            color = 'progress'
            disableElevation = {true}
            style={{
              minWidth: '48px', 
              minHeight: '16px',
              fontSize: '14px',
              borderRadius: 0,
              borderColor: 'black'}}
            onClick = {() => this.toSpecific(index)}>
              Q{index+1}
            </Button>)} else {
            return (
            <Button 
              variant="contained"
              color = 'success'
              disableElevation = {true}
              style={{
                minWidth: '48px', 
                minHeight: '16px',
                fontSize: '14px',
                borderRadius: 0,
                borderColor: 'black'}}
              onClick = {() => this.toSpecific(index)}>
              Q{index+1}
              </Button>)}})
        
    const navigate = (<Stack direction = "row" spacing = {2}>
                        <Button 
                        variant="contained" 
                        style={{
                          minWidth: '90px', 
                          minHeight: '45px',
                          fontSize: '20px',
                          borderRadius: 20}}
                        onClick = {() => this.toBack()}>Back
                        </Button>
                        <Button 
                        variant="contained" 
                        style={{
                          minWidth: '90px', 
                          minHeight: '45px',
                          fontSize: '20px',
                          borderRadius: 20}}
                        onClick = {() => this.toNext()}>Next
                        </Button>
                        </Stack>)

    return (
      <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: "100vw",
          height:"100vh",
          bgcolor: "background.main",
          }}>
           <Box sx = {{
            display: 'flex',
            width: "100vw",
            height:"15vh",
            bgcolor: "background.main",
            flexDirection: 'column',
            padding: 0
            }}>
            <Typography variant = 'h6'>
            <a style = {{marginLeft: '2rem'}}>bigbiO</a>
            </Typography>
            </Box>
          <Box sx = {{
            display: 'flex',
            justifyContent: 'even',
            flexDirection: 'column',
            alignItems: 'center',
            width: "80vw",
            height:"80vh",
            bgcolor: "background.main",
            gap: '20vh',
            }}>
            <Box sx ={{display: 'flex', 
                                alignItems: 'center',
                                flexDirection: 'column'}}>
              <Typography>
                <Typography variant = 'h5' style={{display: 'inline-block'}}>
                  Question {cq + 1}
                  </Typography>
                  <Typography variant = 'h6' style={{display: 'inline-block'}}>
                  /{questions.length} 
                  </Typography>
              </Typography>
              <Typography variant = 'h4' >
                {questions[cq].questionText}
              </Typography>
            </Box>
            <Box>
              {questions[cq].answerOptions}
            </Box>
            <Box sx ={{display: 'flex', 
                      alignItems: 'center',
                      flexDirection: 'column'}}>
            <Box sx ={{display: 'flex', 
                       alignItems: 'center',
                       flexDirection: 'column'}}>
              {navigate}
            </Box>
            <Box pt = {3} sx ={{display: 'flex', 
                                alignItems: 'center'}}>
              {progress}
            </Box>
            </Box>
          </Box>
      </Box>

    );
}
}