import Navbar from "./Nav-Bar/Navbar";
import SmoothScroll from "../helper/SmoothScroller";
import Accessibility from "./Accessibility/Accessibility";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* Push content below navbar */}
      <SmoothScroll>
        <main >
          {children}
        </main>
      </SmoothScroll>
        <Accessibility />
    </>
  );
}
