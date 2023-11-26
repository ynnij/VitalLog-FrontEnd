import VlogNav from "../VlogNav";

import React from "react";

const TodayLogPage = () => {
  return (
    <div div className="max-w-[1820px] mx-auto">
      <div className="flex flex-col min-h-screen bg-white text-gray-800">
        <header className="p-2 sm:p-6">
          <VlogNav isUserPage={true} />
        </header>
      </div>
    </div>
  );
};

export default TodayLogPage;
