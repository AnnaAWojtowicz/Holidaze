import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HolidazeContext from "./components/HolidazeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';
import ProfileSite from './components/profile/ProfileSite';
import OwnerProperties from './components/profile/OwnerProperties';
import UserBookings from './components/profile/UserBookings';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [avatar, setAvatar] = useState("");
  const [cardData, setCardData] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const logOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
    setIsLoggedin(false);
  };

  return (
    <HolidazeContext.Provider value={{ inputValue, setInputValue, avatar, setAvatar, cardData, setCardData, isLoggedin, setIsLoggedin, logOut }}>
      <BrowserRouter>
        <div className="background">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/cardpage/:id" element={<CardPage />} />
              <Route path="/profilesite/:name" element={<ProfileSite />} />
              <Route path='/ownerproperties/:name' element={<OwnerProperties redirectAfterDelete="/ownerpropertiessite" />} />
              <Route path="/yourbookings" element={<UserBookings />} />
            </Routes>
          </Layout>
        </div>
      </BrowserRouter>
    </HolidazeContext.Provider>
  );
}

export default App;
