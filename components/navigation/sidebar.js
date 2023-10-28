"use client";
import { useState, useEffect } from "react";
import { Newspaper, MenuSquare, X } from "lucide-react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div
        className={`w-40 border-r ${
          isSidebarVisible ? "" : "hidden "
        } flex flex-col items-center `}
      >
        {window.innerWidth <= 600 && (
          <button onClick={toggleSidebar} className="m-2">
            <X />
          </button>
        )}

        <div
          className="sticky top-0 space-y-4 flex flex-col items-center
        p-2"
        >
          <div className="mt-8">Image is here</div>
          <h1 className="text-xl font-semibold">Aggregatoor</h1>
          <ul>
            <li className="flex items-center gap-1">
              <Newspaper size={16} />
              All News
            </li>
          </ul>
        </div>
      </div>
      <div>
        {!isSidebarVisible && (
          <button onClick={toggleSidebar}>
            <MenuSquare />
          </button>
        )}
      </div>
    </>
  );
};

export default Sidebar;

// {
//   !isSidebarVisible ? (
//     <button onClick={toggleSidebar}>
//       <MenuSquare />
//     </button>
//   ) : window.innerWidth <= 600 ? (
//     <button onClick={toggleSidebar}>
//       <MenuSquare />
//     </button>
//   ) : (
//     ""
//   );
// }
