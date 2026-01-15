import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom';   
import { snapScroll } from './helper/SnapScroll';
import Layout from './Layout/Layout';
import Home from './Pages/Sections-Contents/Home/home';
import Company from './Pages/Sections-Contents/Company/Company';


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
        </Routes>
        
      </Layout>
    {/* <Accessibility /> */}
   </div>
  );
}

export default App
