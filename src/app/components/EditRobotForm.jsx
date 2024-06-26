import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { UserCardV2 } from "./UserCardV2.jsx";
import { UserContext } from "../context/UserContext.jsx";
export function EditRobotForm({ user }) {
  const [userState, setUserState] = useState(user);
  const { updateUser } = useContext(UserContext);
  return (
    <div className="flex">
      <UserCardV2 user={userState} key={userState._id} isEditing={true} />
      <div className="h-[34rem] w-full mt-11">
        <form className="flex flex-col w-full justify-center h-full">
          <div className="mx-auto w-80">
            <h2 className="text-center text-lg text-white font-bold">
              Edit your robot!
            </h2>
            <p className="text-md">Enter the data of your robot to create it</p>
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Name"
              onChange={(e) => {
                setUserState(function () {
                  const newUser = {
                    ...userState,
                    name: e.target.value,
                    img: `https://robohash.org/${e.target.value}`,
                  };
                  return newUser;
                });
              }}
              value={userState.name}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Email"
              onChange={(e) => {
                setUserState(function () {
                  const newUser = { ...userState, email: e.target.value };
                  return newUser;
                });
              }}
              value={userState.email}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="City"
              onChange={(e) => {
                setUserState(function () {
                  const newUser = {
                    ...userState,
                    address: {
                      city: e.target.value,
                      country: userState.address.country,
                    },
                  };
                  return newUser;
                });
              }}
              value={userState.address.city}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Country"
              onChange={(e) => {
                setUserState(function () {
                  const newUser = {
                    ...userState,
                    address: {
                      country: e.target.value,
                      city: userState.address.city,
                    },
                  };
                  return newUser;
                });
              }}
              value={userState.address.country}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Company"
              onChange={(e) => {
                setUserState(function () {
                  const newUser = {
                    ...userState,
                    company: { name: e.target.value },
                  };
                  return newUser;
                });
              }}
              value={userState.company.name}
            />
            <div className="w-80 flex justify-end">
              <a
                onClick={function (e) {
                  e.preventDefault();
                  updateUser(userState);
                }}
                className="mt-12 mx-auto bg-gradient-to-l from-[#FACC15aa] to bg-[#ea5a0c] text-white font-bold block w-max py-2 px-4 rounded-xl shadow-xl shadow-bright-red/30 md:mx-0"
                href="#"
              >
                Edit
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
EditRobotForm.propTypes = {
  user: PropTypes.object,
};
