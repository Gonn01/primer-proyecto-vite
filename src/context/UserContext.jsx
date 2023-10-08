import PropTypes from "prop-types";
import { useState, useEffect, createContext } from "react";
export const UserContext = createContext();
export function UserContextProvider(props) {
  // variable userList y funcion para cambiar esa variable
  // inicializada en []
  const [userList, setUsers] = useState([]);

  // cuando UserContextProvider es creado se activa y a userList le da el
  // valor de data que esta importado arriba
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // a cada user le meto una propiedad img con la url de la imagen
        let x = data.map((item, index) => ({
          ...item,
          img: `https://robohash.org/${index + 1}.png`,
        }));
        // seteo la variable userList con el valor de x
        setUsers(x);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function CreateUser(userName, desc) {
    //creo un nuevo array y le agrega el user
    let i = userList.length + 1;
    setUsers([
      ...userList,
      {
        name: userName,
        id: i,
        body: desc,
        img: `https://robohash.org/${i}.png`,
        email: `${userName}@gmail.com`,
        address: {
          city: "Buenos Aires",
          country: "Argentina",
        },
        company: {
          name: "RTC",
        },
      },
    ]);
  }
  // funcion para borrar un usuario
  function DeleteUser(id) {
    setUsers(userList.filter((t) => t.id !== id));
  }
  return (
    <UserContext.Provider
      // proveo a UserContext el valor de userList, CreateUser y DeleteUser
      value={{
        userList: userList,
        createUser: CreateUser,
        deleteUser: DeleteUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
