import { Drawer, Card } from "antd";
import { useState } from "react";
import { useAccessibility } from "../../Global/Accesibility-Context/AccessibilityContext.jsx";
import { IoAccessibility } from "react-icons/io5";


const Tile = ({ title, onClick, level }) => (
  <div
    onClick={onClick}
    className="
      cursor-pointer rounded-xl border border-gray-200
      p-6 text-center bg-white
      hover:shadow-md transition
    "
  >
    <div className="text-sm font-medium">{title}</div>
    <div className="mt-3 flex justify-center gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-6 rounded ${
            level >= i ? "bg-orange-500" : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  </div>
);

export default function Accessibility() {
  const [open, setOpen] = useState(false);
  const { settings, toggle, resetAll } = useAccessibility();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed flex items-center justify-center bottom-5 left-5 z-999 w-16 h-16 rounded-full bg-orange-400 text-white text-xl shadow-lg"
      >
        <IoAccessibility size={30} color="white" />
      </button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="left"
        width={560}       
        maskStyle={{ backdropFilter: "none" }}
        closable={false}
        // getContainer={document.body}
  
        title={
           <div className="text-xl font-semibold flex justify-between items-center">
            <span className="rounded-full flex items-center gap-2 px-2 py-2 border border-white !font-extralight !text-[14px]"> 
              <button className="h-6 w-6 bg-yellow-500 rounded-full"></button> 
                English
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>

              <div className="cursor-pointer rounded-full p-2 hover:bg-white/20 bg-zinc-500/20 transition" onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </div>
           </div>
        }
       styles={{
        mask:{
          backdropFilter: "none",
        },
        header:{
          backgroundColor: "#f58625",
        },
        body:{ 
          padding:0,
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#f58625 transparent',
        },
        title:{
          color: 'white',
          fontWeight: '300',
        }
      
    }}
      >
     
        {/* TEXT */}
        <section className="mb-6">
          <h4 className="mb-3 text-xs font-semibold uppercase text-gray-500">
            Text
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <Tile
              title="Bigger Text"
              level={settings.textSize}
              onClick={() => toggle("textSize")}
            />
            <Tile
              title="Letter Spacing"
              level={settings.letterSpacing}
              onClick={() => toggle("letterSpacing")}
            />
            <Tile
              title="Line Height"
              level={settings.lineHeight}
              onClick={() => toggle("lineHeight")}
            />
          </div>
        </section>

        {/* COLORS */}
        <section className="mb-6">
          <h4 className="mb-3 text-xs font-semibold uppercase text-gray-500">
            Colors
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <Tile
              title="Brightness"
              level={settings.brightness}
              onClick={() => toggle("brightness")}
            />
            <Tile
              title="Invert Colors"
              level={settings.invert}
              onClick={() => toggle("invert")}
            />
          </div>
        </section>

        {/* RESET */}
        <button
          onClick={resetAll}
          className="mt-6 w-full rounded-lg bg-orange-500 py-3 text-white font-semibold"
        >
          Reset Settings
        </button>
      </Drawer>
    </>
  );
}
