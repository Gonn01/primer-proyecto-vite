import express from "express";
export const router = express.Router();
import { User } from "../models/user.js";

router.get("/getUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ status: "Error al obtener los usuarios" });
  }
});

router.get("/getUser/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(`Usuario con id ${req.params.id} obtenido: ` + user);
  } catch (error) {
    res.status(500).json({ status: "Error al obtener el usuario" });
  }
});

router.post("/createUser", async (req, res) => {
  try {
    const { name, email, address, company, img } = req.body;
    const user = new User({ name, email, address, company, img });
    await user.save();
    res.status(204).json({ status: "Usuario creado" });
  } catch (error) {
    res.status(500).json({ status: "Error creando el usuario" });
  }
});

router.put("/updateUser/:id", async (req, res) => {
  try {
    const { name, email, address, company, img } = req.body;
    const newUser = { name, email, address, company, img };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.status(204).json({ status: "Usuario actualizada" });
  } catch (error) {
    res.status(500).json({ status: "Error actualizando el usuario" });
  }
});

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.status(204).json({ status: `Usuario eliminado: ${deletedUser._id}` });
  } catch (error) {
    res.status(500).json({ status: "Error eliminando el usuario" });
  }
});
