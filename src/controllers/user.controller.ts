import { CreateUserRequest, GetUserByIdRequest } from "../types/users/index.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { getAllUsers, createUser, getUserById } from "../services/index.js";

export const handleGetUsers = async (
  _req: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const users = await getAllUsers();
    reply.status(200).send(users);
  } catch (error) {
    reply.status(500).send({ message: "Error retrieving users", error });
  }
};

export const handleGetUser = async (
  req: GetUserByIdRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await getUserById(userId);
    if (user) {
      reply.status(200).send(user);
    } else {
      reply.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    reply.status(500).send({ message: "Error retrieving user", error });
  }
};

export const handleCreateUser = async (
  req: CreateUserRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const newUser = await createUser(req.body);
    reply.status(201).send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      reply
        .status(500)
        .send({ message: `Error creating user: ${error.message}`, error });
    }
    reply.status(500).send({ message: "Error creating user", error });
  }
};
