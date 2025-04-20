import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from '@/pages/HomePage/HomePage';
import { MainLayout } from './MainLayout/MainLayout';

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<div>Home hey!</div>} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
