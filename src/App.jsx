import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/commons/Header';
import HomeSection from './components/sections/HomeSection';
import ServiceSection from './components/sections/ServiceSection';
import AboutSection from './components/sections/AboutSection';
import Committee from './components/sections/Committee';
import ConferenceDetails from './components/sections/ConferenceDetails';
import CursorAnimation from './CursorAnimation';
import Footer from './components/commons/Footer';
import PublicationDetails from './components/sections/Publication';

function App() {

  return (
    <Router>
      <div>
        {/* This will be visible on all pages */}
        <Header />
        <CursorAnimation />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<ConferenceDetails />} />
            <Route path='/publication' element={<PublicationDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HomeSection />
      <ServiceSection />
      <AboutSection />
      <Committee />
    </>
  );
}

export default App;
