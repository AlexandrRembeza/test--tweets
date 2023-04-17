import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import TweetsPage from './pages/Tweets';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
