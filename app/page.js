"use client";
import SaerchInput from "./components/SaerchInput";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();

console.log(user)

  return (
    <main className="flex min-h-screen flex-col items-center  p-10">
      <div className="flex rounded-lg content-center w-full m-8  bg-github-blue2/10 ">
        <SaerchInput setUser={setUser} />
      </div>
      
      <div className="flex rounded-lg  w-full  bg-github-blue2/10 p-4 ">
        {user && <ListItem user={user} />}
      </div>
    </main>
  );
}
