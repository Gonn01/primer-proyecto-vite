import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
export function UserContextProvider(props) {
  // variable userList y funcion para cambiar esa variable
  // inicializada en []
  const [userList, setUsers] = useState([]);

  function fetchData() {
    fetch("/api/users/getUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  function CreateUser(name, gmail, city, country, company) {
    fetch("/api/users/createUser", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: gmail,
        address: {
          city: city,
          country: country,
        },
        company: {
          name: company,
        },
        img: `https://robohash.org/${name}.png`,
      }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => fetchData())
      .catch((err) => {
        console.log(err.message);
      });
  }
  // funcion para borrar un usuario
  function DeleteUser(user) {
    fetch(`/api/users/deleteUser/${user._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 204) {
          console.log("User deleted successfully.");
          fetchData();
        } else {
          console.log("User deletion failed.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function UpdateUser(user) {
    fetch(`/api/users/updateUser/${user._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        address: user.address,
        company: user.company,
      }),
    })
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <UserContext.Provider
      // proveo a UserContext el valor de userList, CreateUser y DeleteUser
      value={{
        userList: userList,
        createUser: CreateUser,
        deleteUser: DeleteUser,
        updateUser: UpdateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContextProvider;
