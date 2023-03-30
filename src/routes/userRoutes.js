import { Router } from "express";
import userControllers from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import {validateSchema} from "../middlewares/schemaValidationMiddleware.js";
import { doctorSchemma } from "../schemas/Doctor.js";
import { userSchemma } from "../schemas/User.js";

const userRoutes = Router();

userRoutes.post('/signup', validateSchema(userSchemma) , userControllers.create)
userRoutes.post("/signin", userControllers.signin)
userRoutes.use(authMiddleware.authValidation)
userRoutes.post('/signupdoctor', validateSchema(doctorSchemma) , userControllers.createDoctor)


export default userRoutes;