import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';



function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} index />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
