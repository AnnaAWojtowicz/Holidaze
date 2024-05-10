import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchContext from './components/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';
import ProfileSite from './components/profile/ProfileSite';



function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      <BrowserRouter>
        <div className="background">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/cardpage/:id" element={<CardPage />} />
              <Route path="/profilesite" element={<ProfileSite />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
