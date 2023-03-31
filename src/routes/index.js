import { Router } from "express";
import userRoutes from "./userRoutes.js";
import doctorRoutes from "./doctorRoutes.js";
import appointmentRoutes from "./appointmentRoutes.js";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/doctors", doctorRoutes);
routes.use("/appointment", appointmentRoutes);

export default routes;