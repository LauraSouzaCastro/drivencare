import { Router } from "express";
import appointmentControllers from "../controllers/appointmentControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { appointmentSchemma } from "../schemas/Appointment.js";

const appointmentRoutes = Router();

appointmentRoutes.use(authMiddleware.authValidation)
appointmentRoutes.post('/', validateSchema(appointmentSchemma), appointmentControllers.create)
appointmentRoutes.get('/users', appointmentControllers.findAppointmentsUsers)
appointmentRoutes.get('/doctors', appointmentControllers.findAppointmentsDoctors)
appointmentRoutes.put('/doctors/confirm/:appointment_id', appointmentControllers.putAppointmentsDoctors)
appointmentRoutes.delete('/doctors/delete/:appointment_id', appointmentControllers.deleteAppointmentsDoctors)

export default appointmentRoutes;