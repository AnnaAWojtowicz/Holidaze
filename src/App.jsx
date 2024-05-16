import React, { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HolidazeContext from "./components/HolidazeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import CardPage from './components/cardPage/CardPage';
import ProfileSite from './components/profile/ProfileSite';
import NewVenueModal from './components/profile/NewVenueModal';
import OwnerProperties from './components/profile/OwnerProperties';




function App() {
  const [inputValue, setInputValue] = useState('');
  const [avatar, setAvatar] = useState("");
  // const [showModalNewVenue, setShowModalNewVenue] = useState(false);
  // const handleShowModalNewVenue = () => setShowModalNewVenue(true);
  // const handleCloseModalNewVenue = () => setShowModalNewVenue(false);


  return (
    <HolidazeContext.Provider value={{ inputValue, setInputValue, avatar, setAvatar }}>
      {/* <AvatarContext.Provider value={{ avatar, setAvatar }}> */}
      <BrowserRouter>
        <div className="background">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/cardpage/:id" element={<CardPage />} />
              {/* <Route path="/profilesite" element={<ProfileSite handleShowModalNewVenue={handleShowModalNewVenue} />} /> */}
              <Route path="/profilesite" element={<ProfileSite />} />
              <Route path='/ownerproperties' element={<OwnerProperties />} />
            </Routes>
          </Layout>
          {/* <NewVenueModal show={showModalNewVenue} onHide={handleCloseModalNewVenue} /> */}
        </div>
      </BrowserRouter>

      {/* </AvatarContext.Provider> */}
    </HolidazeContext.Provider>
  );
}

export default App;
