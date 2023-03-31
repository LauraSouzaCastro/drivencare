import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchemma } from "../schemas/Appointment.js";

const appointmentRoutes = Router();

appointmentRoutes.use(authMiddleware.authValidation)
appointmentRoutes.post('/', validateSchema(appointmentSchemma), appointmentControllers.create)
appointmentRoutes.get('/', appointmentControllers.findAppointments)

export default appointmentRoutes;