"use client";
import React from "react";

const SaerchInput = ({ setUser }) => {
  const [search, setSearch] = React.useState();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    const res = await fetch(`https://api.github.com/users/${search}`);
    const data = await res.json();

    setUser(data);
  };

  return (
    <div className="flex p-4 content-center justify-around w-full">
      <input
        className=" input w-8/12 "
        placeholder="Search"
        onChange={handleChange}
      />
      <button
        className=" btn w-1/4 text-xs md:text-lg "
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
};

export default SaerchInput;
