import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { Popup } from "../Portal.jsx";
import { EditRobotForm } from "./EditRobotForm.jsx";
export function UserCardV2({ user, isEditing }) {
  const { deleteUser } = useContext(UserContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  console.log(user);
  return (
    <div className="shadow-sm shadow-gray-800 w-96 h-[34rem] rounded-t-xl rounded-b-xl m-11">
      <div className="shadow-sm shadow-gray-800 rounded-t-xl rounded-b-xl">
        <div className="bg-[#175264] h-40 py-3.5 rounded-t-xl">
          <div className="flex justify-center">
            <img
              className="border-solid border-2 rounded-full border-[#FFEFEB] w-44 mt-10 hover:scale-105 transition-all duration-75"
              src={user.img}
              alt={`${user.name}`}
            />
          </div>
          {!isEditing ? (
            <div className="flex justify-end -mt-[15.5rem] -mr-4">
              <img
                onClick={() => deleteUser(user)}
                className="mt-2 mr-2 rounded-full bg-orange-200 w-6 p-1 shadow-xs shadow-white cursor-pointer"
                src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
                alt="Delete"
              />
            </div>
          ) : null}
        </div>
      </div>
      {!isEditing ? (
        <div>
          <button onClick={openPopup}>Abrir Popup</button>
          <Popup isOpen={isPopupOpen} onClose={closePopup}>
            <EditRobotForm user={user} />
          </Popup>
        </div>
      ) : null}

      <div className="bg-orange-200 h-96 w-96 py-3.5 rounded-b-xl flex items-start flex-col justify-evenly pt-8">
        <UserData campo="Name" informacion={user.name} />
        <UserData campo="Email" informacion={user.email} />
        <UserData
          campo="Ubication"
          informacion={`${user.address.city}, ${user.address.country}`}
        />
        <UserData campo="Company" informacion={user.company.name} />
      </div>
    </div>
  );
}
function UserData({ campo, informacion }) {
  return (
    <div className="px-8 mt-4">
      <p className="bg-white rounded-full font-bold flex items-center shadow-lg">
        <span className="bg-[#f25f3a] text-white px-6 rounded-full py-2 text-xs">
          {campo}
        </span>
        <span className="flex-1 py-1 px-4 text-sm overflow-hidden">
          {informacion}
        </span>
      </p>
    </div>
  );
}
UserCardV2.propTypes = {
  user: PropTypes.object.isRequired,
};
UserData.propTypes = {
  campo: PropTypes.string,
  informacion: PropTypes.string,
};
