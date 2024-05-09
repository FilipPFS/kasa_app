import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Error from './Error';
import SingleItem from './SingleItem';
import Footer from '../components/Footer/Footer';
import Page from './Accueil/Page';
import About from './About/About';


const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Page />} />
        <Route path="accueil" element={<Page />} />
        <Route path='apropos' element={<About />} />
        <Route path='items/:itemId' element={<SingleItem />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default AppRouter