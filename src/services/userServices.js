import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";

async function create({ name, email, password }) {
  const { rowCount } = await userRepositories.findByEmail(email);
  if (rowCount) throw new Error("User already exists");

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword });
}

async function signin({ email, password }) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findByEmail(email);
  if (!rowCount) throw new Error("Incorrect email or password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error("Incorrect email or password");

  const token = uuidV4();
  await userRepositories.createSession({ token, user_id: user.id });

  return token;
}

async function createDoctor({ CRM, specialty, location, user_id }) {
  const { rowCount } = await userRepositories.findDoctorById(user_id);
  if (rowCount) throw new Error("Doctor already exists");

  await userRepositories.createDoctor({ CRM, specialty, location, user_id });

}

export default {
  create,
  signin,
  createDoctor
};