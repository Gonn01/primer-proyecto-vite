import UserList from "./components/UserList.jsx";
import CreateUserFormV2 from "./components/CreateUserFormV2.jsx";
import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/create-user" element={<CreateUserFormV2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
