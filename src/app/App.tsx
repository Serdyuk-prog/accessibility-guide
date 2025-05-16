import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from '@/pages/HomePage/HomePage';
import { MainLayout } from './MainLayout/MainLayout';
import { EmojiProvider } from 'react-apple-emojis';
import emojiData from 'react-apple-emojis/src/data.json';
import { PerceivablePage } from '@/pages/PerceivablePage/PerceivablePage';
import { OperablePage } from '@/pages/OperablePage/OperablePage';
import { UnderstandablePage } from '@/pages/UnderstandablePage/UnderstandablePage';
import { RobustPage } from '@/pages/RobustPage/RobustPage';
import { ModalPage } from '@/pages/ModalPage/ModalPage';

const App = () => {
  return (
    <EmojiProvider data={emojiData}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/perceivable" element={<PerceivablePage />} />
            <Route path="/operable" element={<OperablePage />} />
            <Route path="/understandable" element={<UnderstandablePage />} />
            <Route path="/robust" element={<RobustPage />} />
            <Route path="/modal" element={<ModalPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </EmojiProvider>
  );
};

export default App;
