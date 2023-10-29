import PropTypes from "prop-types";
import React from "react";
export function UserCardV2({ user }) {
  return (
    <div className="shadow-sm shadow-gray-800 w-96 h-[34rem] rounded-t-xl rounded-b-xl m-11">
      <div className="bg-[#175264] h-40 w-96 py-3.5 rounded-t-xl">
        <img
          className="translate mx-auto translate-y-[20%] border-solid border-2 rounded-full border-[#FFEFEB] w-44"
          src={user.img}
          alt={`${user.name}`}
        />
        <img
          className="translate -translate-y-[12.5rem] translate-x-[23rem] rounded-full bg-orange-200 w-6 p-1 shadow-xs shadow-white"
          src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
          alt="a"
        />
      </div>

      <div className="bg-orange-200 h-96 w-96 py-3.5 rounded-b-xl flex items-start flex-col justify-evenly">
        <UserData />
        <UserData />
        <UserData />
      </div>
    </div>
  );
}
function UserData() {
  return (
    <div className="px-8 mt-8">
      <p className="bg-white rounded-full font-bold flex items-center">
        <span className="bg-[#f25f3a] text-white px-6 rounded-full py-2 text-xs">
          Company
        </span>
        <span className="flex-1 py-1 px-4 text-sm overflow-hidden">Nidus</span>
      </p>
    </div>
  );
}
UserCardV2.propTypes = {
  user: PropTypes.object.isRequired,
};
