import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';



function App() {
  return (
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
  );
}

export default App;
