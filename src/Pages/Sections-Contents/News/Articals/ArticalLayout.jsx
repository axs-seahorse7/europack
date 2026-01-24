import React from 'react'
import HeroTemplate from '../../../../components/HeroTemplate'
import ArticalTemplate from './ArticalTemplate.jsx';
import "./Artical.css"

const ArticalLayout = () => {
  return (
    <div>
        <HeroTemplate
        title="News"
        subtitle="europack"
        backgroundImage="/images/Articals/europack_contact_map_europe.webp"
        className="hero"
         />

        <ArticalTemplate
            title="GROWTH OVER 10% AGAIN THIS YEAR, DRIVEN BY YOGURT, COFFEE AND PHARMACEUTICAL SECTOR"
            meta="Dairy News #48 - May-June 2025"
            subtitle="Aseptic packaging without the Aluminium layer and/or linked to forest-based polymers"
            content={
                <div className='flex flex-col gap-4' >
                    <span>
                        With a double-digit growth rate will continue, as everything indicates, <a href="https://www.europack.gr" className='text-blue-500' >Europack</a> in 2025, even adding new partnerships to its customer base.
                    </span> 
                    <span>
                        As stated to <a href="https://www.fnbdaily.com/" className='text-blue-500' >FnB Daily</a>, Alexandros Paraskevaidis CEO of the company which is active in industrial production and packaging equipment, as well as with packaging itself, 
                        "the last years we have been running with double-digit growth rates and with the same pattern we will move this year, closing 2025 with an increase in sales between 10% and 13%".                    
                    </span> 
                    <span>
                        THE ROLE OF CUSTOMERS EXPORT ORIENTATION
                    </span> 
                    <span>
                        Key to the company's momentum is, as he notes, the fact that "we are engaged and have many partnerships in the food and pharmaceutical sectors, 
                        which, as expected, have shown strong resistance even in the difficult period of the pandemic while maintaining a strong export orientation". Beyond turnover, he adds, 'we are seeing an overall increase in our activity, having more medium and large projects and fewer small ones.
                    </span> 
                    <span>
                        BACK TO EQUIPMENT WITH HIGH QUALITY
                    </span> 
                    <span>
                        Setting the tone of the year that ends in a few weeks, Mr. Paraskevaidis speaks of "a return of the market to high quality equipment as the fastest growing extroverted industries need high quality infrastructure and services to support both their sales and brand". One of the products that has particular dynamic in this period is yogurt, in which, as Mr. Paraskevaidis mentions, “as <a href="https://www.europack.gr" className='text-blue-500' >Europack</a> we are very well positioned by providing both packaging machines and end of line solutions”.
                    </span> 
                    <span>
                        TREND FOR LARGER YOGURT PACKAGING
                    </span> 
            
                    <span>
                        "Of course, Greek yogurt is nothing new", notes <a href="https://www.europack.gr" className='text-blue-500' >Europack</a> CEO, adding: "What is new is the recognition it has gained abroad at a time when consumers are looking for alternative sources of protein instead of meat. In fact, whereas until recently it was treated as a dessert, consumers now see it as a snack or, in some cases, even a meal. This changes drive more sales and export activity to Greek industries". In fact, he notes that there is a strong tendency to increased size of the packaging: "It is characteristic that at the moment the 500gr pack is more attractive than the 200gr pack".
                    </span> 
                    <span>
                        REPEATED ORDERS IN THE PHARMACEUTICAL SECTOR
                    </span> 
                    <span>
                        A second area in which the company is developing its customer base is that of pharmaceuticals. 'This is perhaps the most dynamically growing industry at the moment in our country with a very serious international footprint. And there we are very well positioned with leading suppliers and reliable solutions which is reflected in repeated orders", Mr. Paraskevaidis is highlighting.
                    </span> 
                    <span>
                        MOBILITY FOR NEW UNITS IN COFFEE
                    </span> 
                    <span>
                        oreover, the mobility of the coffee sector has also been a catalyst for <a href="https://www.europack.gr" className='text-blue-500' >Europack</a> 's growth. "Recently some new, more modern and automated process sites are under development. With the representation of Probat, one of the leading and most historic companies in coffee processing, we can provide leading-edge solutions", he emphasises.
                    </span> 
                    <span>
                        It should be noted that <a href="https://www.europack.gr" className='text-blue-500' >Europack</a> is more than 50 years in the market (founded in 1972), has 20 employees and a technical department capable of supporting the introduction and maintenance of its solutions into the market. At the same time, according to Mr. Paraskevaidis, it also has the ability to design entire production lines as well as build them through collaborations with Greek workshops - "something that gives us the ability to undertake and deliver projects... on a turnkey basis".
                    </span> 

                </div>
            }
            sideImage="/images/pdf-box.png"
            bottomImage="/images/Articals/contact_top_background.webp"
            // nextPost="Damavand strengthens production capabilities with new aseptic carton filling machine from SIG"
            prevPost="The industry at a crossroads"
        />
    </div>
  )
}

export default ArticalLayout