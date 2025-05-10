import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from '@/pages/HomePage/HomePage';
import { MainLayout } from './MainLayout/MainLayout';
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';

const App = () => {
  return (
    <EmojiProvider data={emojiData}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<div>Home hey!</div>} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </EmojiProvider>
  );
};

export default App;
