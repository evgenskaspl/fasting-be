import { FastifyRequest } from "fastify";
import { User } from "./user.model.types.js";

export type GetUserByIdRequest = FastifyRequest<{
  Params: { id: string };
}>;

export type UpdateUserRequest = FastifyRequest<{
  Params: { id: string };
  Body: Pick<User, "name" | "email" | "phone" | "address">;
}>;

export type CreateUserRequest = FastifyRequest<{
  Body: Pick<User, "name" | "email" | "phone" | "address">;
}>;
