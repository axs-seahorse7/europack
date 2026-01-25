import React from 'react'
import HeroTemplate from '../../../../components/HeroTemplate'
import ArticalTemplate from './ArticalTemplate.jsx';
import "./Artical.css"
import { Articles } from './Articals.jsx'
import { useNavigate, useParams } from 'react-router-dom';

const ArticalLayout = () => {
    const {slug} = useParams();
    const navigate = useNavigate();
    const article = Articles.find(a => a.slug === slug);

//      if (!article) {
//     return ;
//   }


  return (
    <div>
        <HeroTemplate
        title="News"
        subtitle="europack"
        backgroundImage={ article?.heroBg ||"/images/Articals/europack_contact_map_europe.webp"}
        className="hero"
         />
 
        <ArticalTemplate artical={article} />
    </div>
  )
}

export default ArticalLayout