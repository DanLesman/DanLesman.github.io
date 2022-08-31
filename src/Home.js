import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography'
import './App.css';

export function Home() {
  return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100vw",
        height:"100vh",
        bgcolor: "background.main",
        gap: '2vh',
        }}>
        <Box sx={{
          justifyContent: 'center' 
            }}>
            <Typography variant = 'h2'> bigbiO </Typography>
       </Box>
       <Box sx={{  
          justifyContent: 'center' 
          }}>
        <Link to="/Test" style={{ textDecoration: "none" }}>
          <Button 
          href="/Test" variant="contained" 
          style={{
            minWidth: '15vh', 
            minHeight: '10vh',
            fontSize: '20px',
            borderRadius: 20}}
          >Begin Test</Button>
        </Link>
      </Box>
      </Box>
  );
}