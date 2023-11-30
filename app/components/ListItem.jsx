import { HomeFilled, TwitterOutlined } from "@ant-design/icons";
import React from "react";


const ListItem = ({ user }) => {
  const date = new Date(user.created_at);

  return (
    <div className="flex  flex-col   w-full">
      <div className=" flex  w-full h-1/3 text-xs md:flex-row md:justify-between md:text-lg ">
        <img
          className="flex flex-row w-1/3 h-full rounded-xl mr-2 md:mr-7 lg:w-1/12 lg:h-full  "
          src={user.avatar_url}
          alt=""
        />

        <div className="flex flex-grow justify-around flex-col sm:flex-row sm:justify-between   ">
          <div className="flex flex-col ">
            <h1 className="flex font-bold mb-2">{user.name}</h1>
            <a
              className=" "
              href={`https://github.com/${user.login}`}
              target="_blank"
            >
              <p className=" inline-block transition-all hover:scale-90  hover:text-violet-600  ">@{user.login}</p>
            </a>
          </div>
          <div className="flex text-zinc-400 from-slate-700  italic text-sm md:text-lg ">
            <h1>Joined {date.toDateString()}</h1>
          </div>
        </div>
      </div>
      <p className="font-extralight text-white from-neutral-900 italic text-sm text-center md:text-lg">
        {user.bio ? user.bio : "There is no bio"}
      </p>
      <div className="flex items-center text-sm w-full p-4 mt-3 justify-around bg-github-blue/50 rounded-md md:p-8 md:w-5/6 md:ml-28 md:m-3 md:text-lg ">
        <div>
          <h3>Repos</h3>
          <p>{user.public_repos}</p>
        </div>
        <div>
          <h3>Followers</h3>
          <p>{user.followers}</p>
        </div>
        <div>
          <h3>Following</h3>
          <p>{user.following}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7  sm:grid-cols-2 sm:gap-9 sm:mt-6">
        <a className="flex  justify-center" href="">
       <HomeFilled className='p-1' />
          {user.location ? user.location : "No Location"}
        </a>
        <a className="flex justify-center" href="" >
          {" "}
          <TwitterOutlined className='p-1' />
          {user.twitter_username ? user.twitter_username : "No Twitter"}
        </a>
      </div>
    </div>
  );
};

export default ListItem;
