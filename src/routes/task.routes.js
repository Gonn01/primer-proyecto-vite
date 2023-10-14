import express from "express";
export const router = express.Router();
import { Task } from "../models/task.js";
//si vas a http://localhost:3000/api/tasks obtiene todas las tareas y te devuelve las tareas
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});
//si vas a http://localhost:3000/api/tasks/id obtiene una tarea y te devuelve la tarea
router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(`tarea con id ${req.params.id} obtenida ` + task);
});
//si vas a http://localhost:3000/api/tasks crea una tarea y te devuelve "tarea creada
router.post("/", async (req, res) => {
  const { name, username, email, address, company, img } = req.body;
  const task = new Task({ name, username, email, address, company, img });
  await task.save();
  res.json({ status: "tarea creada" });
});
//si vas a http://localhost:3000/api/tasks/id actualiza una tarea y te devuelve "tarea actualizada"
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const newTask = { name };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({ status: "tarea actualizada" });
});
//si vas a http://localhost:3000/api/tasks/id elimina una tarea y te devuelve "tarea eliminada"
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndRemove(req.params.id);
    console.log("Deleted Task:", deletedTask._id);
    res.status(204).json({ status: "tarea eliminada" });
  } catch (error) {
    res.status(500).json({ status: "ERRORR" });
  }
});
