import { useState } from "react";

// Example of separate components you could use in sections
import Test1 from "./Test1.jsx";
import Test2 from "./Test2.jsx";
import Test3 from "./Test3.jsx";
import Test4 from "./Test4.jsx";
import Test5 from "./Test5.jsx";

export default function SidebarPanel() {
  const [active, setActive] = useState("start");

  // Sections array: each object has a label and a React component
  const sections = [
    { id: "start", label: "start here", content:   <Test1 /> },
    { id: "how", label: "how it works", content: <Test2/> },
    { id: "included", label: "whats included", content: <Test3 /> },
    { id: "about", label: "about", content: <Test4/> },
    { id: "contact", label: "contact", content: <Test5/> },
  ];

  return (
    <div className="flex flex-col bg-test1">

 <div
    id="logo"
    class="text- 2xl:text-9xl lg:text-7xl text-6xl pb-1 opacity-90"
  >
    <a href="/"> Laughing <br /> Coyote</a>
  </div>
      {/* NAV COLUMN */}
  <div className="flex justify-left ">
      <div id="nav-items" className="px-3 py-1 mt-3 bg- flex flex-col  border-t border-b border-black space-y-1 text-xl">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`text-left hover:opacity-70 ${
              active === section.id ? "font-bold" : ""
            }`}
            onClick={() => setActive(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
      </div>





      {/* CONTENT COLUMN */}
      <div className="bg- min-h-[120px]">
        {sections.find((section) => section.id === active)?.content}
      </div>

    </div>
  );
}