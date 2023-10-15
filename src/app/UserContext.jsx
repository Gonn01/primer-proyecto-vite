import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
export function UserContextProvider(props) {
  // variable userList y funcion para cambiar esa variable
  // inicializada en []
  const [userList, setUsers] = useState([]);

  function fetchData() {
    fetch("/api/tasks")
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
    fetch("/api/tasks", {
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
        img: `https://robohash.org/${userList.length + 1}.png`,
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
    console.log("Deleting Task with ID:", user._id);
    fetch(`/api/tasks/${user._id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 204) {
          // HTTP 204 No Content means success
          console.log("Task deleted successfully.");
          fetchData(); // Reload the data
        } else {
          console.log("Task deletion failed.");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function UpdateUser(user, name) {
    console.log("Updating Task with ID:", user._id);
    fetch(`/api/tasks/${user._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((response) => {
        console.log("Response Status:", response.status);
        console.log("Task updated successfully.");
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
