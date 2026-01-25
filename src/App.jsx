import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom';   
import { snapScroll } from './helper/SnapScroll';
import Layout from './Layout/Layout';
import Home from './Pages/Sections-Contents/Home/home.jsx';
import Company from './Pages/Sections-Contents/Company/Company.jsx';
import Services from './Pages/Sections-Contents/Services/Services.jsx';
import {News} from './Pages/Sections-Contents/News/News.jsx';
import ArticalLayout from './Pages/Sections-Contents/News/Articals/ArticalLayout.jsx';
import NewsPage2 from './Pages/Sections-Contents/News/Page-2/NewsPage2.jsx';


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
          <Route path='/category/news' element={<News />} />
          <Route path='/category/news/page2' element={<NewsPage2 />} />
          <Route path='/:slug' element={<ArticalLayout  />} />
        </Routes>
        
      </Layout>
    {/* <Accessibility /> */}
   </div>
  );
}

export default App
