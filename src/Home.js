import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import logo from './logo.svg';
import './App.css';

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <Box 
    sx={{justifyContent: 'flex-start'}}>
      <p> bigbiO </p>
      </Box>
      <Box 
    sx={{justifyContent: 'flex-start'}}>
        <Link to="/Test" style= {{textDecoration: "none"}}>
      <Button href="/Test" variant ="contained">Begin Test</Button>
      </Link>
      </Box>
      </header>
    </div>
  );
}