import UserList from "./components/UserList.jsx";
import CreateUserForm from "./components/CreateUserForm.jsx";
import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/1" element={<CreateUserForm />}></Route>
      </Routes>
      <CreateUserForm />
    </>
  );
}

export default App;
