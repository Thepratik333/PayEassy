import React , {useEffect} from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/commons/Header';
import HeroSection from './components/sections/HeroSection';
import SupportSection from './components/sections/SupportSection';
import ServiceSection from './components/sections/ServiceSection';
import AboutSection from './components/sections/AboutSection';
import WorksSection from './components/sections/WorkSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/commons/Footer';
import Login from './components/views/Login';
import CursorAnimation from './CursorAnimation';

function App() {

  return (
    <div>
    <CursorAnimation/>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
    </div>

  );
}

function Home() {

  return (
    <>
    <Header/>
      <HeroSection />
      <SupportSection />
      <ServiceSection />
      <AboutSection />
      <WorksSection />
      <BlogSection />
      <ContactSection />
      <Footer/>
      </>
  );
}

export default App;
