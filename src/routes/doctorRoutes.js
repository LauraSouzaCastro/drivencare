import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchemma } from "../schemas/Doctor.js";

const doctorRoutes = Router();

doctorRoutes.use(authMiddleware.authValidation)
doctorRoutes.post('/signup', validateSchema(doctorSchemma) , doctorControllers.create)
doctorRoutes.get('/', doctorControllers.findDoctors)

export default doctorRoutes;