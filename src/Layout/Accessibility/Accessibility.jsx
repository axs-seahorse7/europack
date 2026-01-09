import { Drawer } from "antd";
import { useState } from "react";
import { useAccessibility } from "../../Global/Accesibility-Context/AccessibilityContext.jsx";

const Accessibility = () => {
  const [open, setOpen] = useState(false);
  const { settings, setSettings } = useAccessibility();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-999 w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg"
      >
        ♿
      </button>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        width={360}
        title="Accessibility Adjustments"
      >
        <div className="space-y-6">

          {/* TEXT */}
          <section>
            <h4 className="font-semibold mb-2">Text</h4>
            <button onClick={() =>
              setSettings(s => ({ ...s, fontScale: s.fontScale + 0.1 }))
            }>Bigger Text</button>

            <button onClick={() =>
              setSettings(s => ({ ...s, fontScale: 1 }))
            }>Reset Text</button>
          </section>

          {/* COLORS */}
          <section>
            <h4 className="font-semibold mb-2">Colors</h4>
            <button onClick={() =>
              setSettings(s => ({ ...s, grayscale: !s.grayscale }))
            }>Grayscale</button>

            <button onClick={() =>
              setSettings(s => ({ ...s, invert: !s.invert }))
            }>Invert Colors</button>
          </section>

          {/* ORIENTATION */}
          <section>
            <h4 className="font-semibold mb-2">Orientation</h4>
            <button onClick={() =>
              setSettings(s => ({ ...s, stopAnimations: !s.stopAnimations }))
            }>Stop Animations</button>

            <button onClick={() =>
              setSettings(s => ({ ...s, hideImages: !s.hideImages }))
            }>Hide Images</button>
          </section>

          {/* RESET */}
          <button
            className="w-full bg-orange-500 text-white py-3 rounded"
            onClick={() => {
              localStorage.removeItem("accessibility");
              window.location.reload();
            }}
          >
            Reset Settings
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Accessibility;
