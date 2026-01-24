
 function ArticalTemplate ({ title, meta, subtitle, content, sideImage, bottomImage, footerImage, nextPost, prevPost }) {
  return (
    <>
      {/* MAIN SECTION */}
      <section className="article-wrapper">
        <div className="article-grid">

          {/* LEFT 70% */}
          <div className="article-left">
            <h1>{title}</h1>
            <p className="article-meta">{meta}</p>

            <h3 className="article-subtitle">{subtitle}</h3>

            <div className="article-content">
              {content}
            </div>
          </div>

          {/* RIGHT 30% */}
          <div className="article-right">
            {sideImage && (
              <div className="side-image">
                <img src={sideImage} alt="" />
              </div>
            )}
            {/* remaining space intentionally empty */}
          </div>

        </div>
      </section>

        <div className="w-full flex items-center justify-center h-30 " >
          <img src={bottomImage} alt="" style={{ width: "100%", height: "100%", width:"400px" }} />
        </div>
      {/* FOOTER NAV */}
      <section className="article-footer border">
        <div className="footer-nav flex justify-between items-center px-20">

         {nextPost && <div className="footer-item  ">
            <span className="label">Next Post</span>
            <p>{nextPost}</p>
          </div>
          }

          <div className="footer-center">
            <img src='images/favicon-96x96.png' alt="" className="h-12 w-12" />
          </div>

          <div className="flex gap-2 w-40 ">
            <p className="flex justify-end w-full border ">{prevPost}</p>
            <span className="border border-gray-500"><i className="ri-arrow-right-s-line"></i></span>
          </div>

        </div>

      </section>
    </>
  );
}

export default ArticalTemplate;