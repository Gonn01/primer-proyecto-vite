import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
function CreateUserFormV2() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");

  const { createUser } = useContext(UserContext);

  return (
    <section className="flex flex-col sm:flex-row z-100">
      <div className="h-screen sm:w-[48rem] flex items-center flex-colflex justify-center">
        <div className="absolute -z-50">
          <img
            src="https://res.cloudinary.com/dkdwnhsxf/image/upload/v1698507503/Captura_de_pantalla_2023-10-28_122858_jihxyp.png"
            alt="asd"
          />
        </div>
        <div className="h-full w-full bg-gradient-to-tl from-[#FACC15cc] to bg-[#FC6645cc] flex items-center flex-col justify-center">
          <h1 className="text-4xl text-white font-bold">Welcome to Robots!</h1>
          <p className="text-md">A page where you can create your own robots</p>
        </div>
      </div>

      <div className="h-screen bg-[#175264] w-full">
        <form className="flex flex-col w-full justify-center h-full" action="">
          <div className="mx-auto w-80">
            <h2 className="text-center text-lg text-white font-bold">
              Create your robot!
            </h2>
            <p className="text-md">Enter the data of your robot to create it</p>
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="mt-3 w-80 px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-[#ea5a0c]"
              placeholder="Model"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <div className="w-80 flex justify-end">
              <a
                onClick={function (e) {
                  e.preventDefault();
                  createUser(name, email, city, country, company);
                  setName("");
                  setEmail("");
                }}
                className="mt-12 mx-auto bg-gradient-to-l from-[#FACC15aa] to bg-[#ea5a0c] text-white font-bold block w-max py-4 px-6 rounded-xl shadow-xl shadow-bright-red/30 md:mx-0"
                href="#"
              >
                Get Started
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateUserFormV2;
