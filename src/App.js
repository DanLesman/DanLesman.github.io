import reactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./Home";
import {Test} from './Test';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/">
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


