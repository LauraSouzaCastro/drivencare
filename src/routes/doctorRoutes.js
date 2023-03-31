import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchemma, horariesSchemma } from "../schemas/Doctor.js";

const doctorRoutes = Router();

doctorRoutes.use(authMiddleware.authValidation)
doctorRoutes.post('/signup', validateSchema(doctorSchemma), doctorControllers.create)
doctorRoutes.post('/horaries', validateSchema(horariesSchemma), doctorControllers.createHoraries)
doctorRoutes.get('/', doctorControllers.findDoctors)
doctorRoutes.get('/dates/:doctor_id', doctorControllers.findDates)

export default doctorRoutes;