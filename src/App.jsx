import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchContext from './components/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';



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
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
