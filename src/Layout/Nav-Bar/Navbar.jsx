export default function Navbar() {
  return (
    <header className="navbar px-5">
        <div className="nav-left px-3 bg-white/10 h-full flex items-center">
          <img src="/images/Plain.Europack.Logo_.white_.png" alt="Logo" className="h-8" />
        </div>
      <div className="nav-content flex px-2 justify-between items-center h-full w-[95%] ">

        <nav className="nav-center flex items-center gap-5 px-6 uppercase text-sm">

          <a className="outline outline-1 cursor-pointer outline-transparent hover:outline-white rounded-full px-3 py-1 transition">
            Company
          </a>

          <a className="outline outline-1 cursor-pointer outline-transparent hover:outline-white rounded-full px-3 py-1 transition">
            Services
          </a>

          {/* DROPDOWN ITEM */}
        <div className="relative group">

          {/* Trigger */}
          <a
            className="outline outline-1 outline-transparent hover:outline-white rounded-full px-3 py-1 transition cursor-pointer"
          >
            ΑΝΤΙΠΡΟΣΩΠΕΙΕΣ
          </a>

          {/* Hover bridge + dropdown */}
          <div
            className="
              absolute left-0 top-full
              pt-4           /* ← hover bridge */
              opacity-0
              pointer-events-none
              group-hover:opacity-100
              group-hover:pointer-events-auto
              transition-opacity duration-200
            "
          >
            <div
              className="
                w-80 rounded-xl
                bg-black/80 backdrop-blur-xl
                shadow-2xl
                translate-y-2
                group-hover:translate-y-0
                transition-transform duration-300 ease-out
              "
            >
              <ul className="p-6 space-y-4 normal-case text-sm text-white">
                <li className="hover:text-orange-400 transition cursor-pointer">
                  Product Manufacturing And Packaging Lines
                </li>
                <li className="hover:text-orange-400 transition cursor-pointer">
                  Quality Control
                </li>
                <li className="hover:text-orange-400 transition cursor-pointer">
                  Supply Chain
                </li>
              </ul>
            </div>
          </div>
        </div>


          <a className="outline outline-1 cursor-pointer outline-transparent hover:outline-white rounded-full px-3 py-1 transition">
            News
          </a>

        </nav>



        <div className="nav-right flex gap-5">
          <button className="bg-white px-5 flex gap-6 items-center  py-2 font-medium">
            EN 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <button className="contact">Contact ↗</button>
        </div>
      </div>
    </header>
  );
}
