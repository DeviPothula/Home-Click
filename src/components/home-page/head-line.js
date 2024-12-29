import React from "react";
import SearchBar from "../../common-components/search-bar";

const HeadLine = () => {
  return (
    <div className="max-w-screen-xl flex items-center mx-auto p-4">
      <h2 className="w-1/2 mb-4 font-bold font-serif leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Home Click
      </h2>
      <div className="w-1/2">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeadLine;
