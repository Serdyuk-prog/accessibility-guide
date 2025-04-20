import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from '@/pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<div >Home hey!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
