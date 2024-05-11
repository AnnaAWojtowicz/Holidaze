import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HolidazeContext from "./components/HolidazeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';
import ProfileSite from './components/profile/ProfileSite';





function App() {
  const [inputValue, setInputValue] = useState('');
  const [avatar, setAvatar] = useState("");
  return (
    <HolidazeContext.Provider value={{ inputValue, setInputValue, avatar, setAvatar }}>
      {/* <AvatarContext.Provider value={{ avatar, setAvatar }}> */}
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
      {/* </AvatarContext.Provider> */}
    </HolidazeContext.Provider>
  );
}

export default App;
