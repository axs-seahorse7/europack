import Navbar from "./Nav-Bar/Navbar";
import SmoothScroll from "../helper/SmoothScroller";
import Accessibility from "./Accessibility/Accessibility";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      {/* Fixed Navbar */}

      <SmoothScroll>
        <main className='mt-[-70px]'>
          <Navbar />
          {children}
        <Footer />
        </main>
      </SmoothScroll>

      <Accessibility />
    </>
  );
}
