// App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSideBar";

function App() {
  return (
    <div className="flex xl:container mx-auto min-h-screen bg-black text-white">
      <Sidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}

export default App;
