import React from "react";
import reactDOM from 'react-dom/client';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green, purple } from '@mui/material/colors';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom";
import {Home} from "./Home";
import {Test} from './Test';
import './App.css';

/* const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
}); */

const myTheme = createTheme({
  palette:{
    background: {
      main: 'white',
    },
    progress: {
      main: '#E0E0E0',
      dark: '#BDBDBD',
    }
  },
});
// myTheme = responsiveFontSizes(myTheme);

//export myTheme;

export default function App() {
  // const [light, setLight] = React.useState(true)
  return (
    // <ThemeProvider theme= {light ? themeLight : themeDark}>
   // <CssBaseline />
  // <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
    <ThemeProvider theme = {myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path ="/">
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  );
}

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


