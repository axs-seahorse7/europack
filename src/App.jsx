import { useState, useEffect } from 'react'
import SmoothScroll from './helper/SmoothScroller';
import { snapScroll } from './helper/SnapScroll';
import Sections from './components/Sections';
import Home from './Pages/Sections-Contents/Home/home';
import Layout from './Layout/Layout';


function App() {

    useEffect(() => {
    setTimeout(() => {
      snapScroll();
    }, 100);
  }, []);

  return (
   <div>
    <SmoothScroll>
      <Layout>
        <Home />
      </Layout>
    </SmoothScroll>

   </div>
  );
}

export default App
