import { Router } from "express";
import userRoutes from "./userRoutes.js";
import doctorRoutes from "./doctorRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/doctors", doctorRoutes);

export default routes;