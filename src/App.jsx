import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom';   
import { snapScroll } from './helper/SnapScroll';
import Layout from './Layout/Layout';
import Home from './Pages/Sections-Contents/Home/home.jsx';
import Company from './Pages/Sections-Contents/Company/Company.jsx';
import Services from './Pages/Sections-Contents/Services/Services.jsx';


function App() {

    useEffect(() => {
    setTimeout(() => {
      snapScroll();
    }, 100);
  }, []);

  return (
   <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        
      </Layout>
    {/* <Accessibility /> */}
   </div>
  );
}

export default App
