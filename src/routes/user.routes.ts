import { FastifyInstance } from "fastify"; // import FastifyInstance
import {
  handleGetUser,
  handleGetUsers,
  handleCreateUser,
} from "../controllers/user.controller.js";

export const userRouter = async (app: FastifyInstance) => {
  app.get("/", handleGetUsers);

  app.get("/get/:id", handleGetUser);

  app.post("/create", handleCreateUser);
};
