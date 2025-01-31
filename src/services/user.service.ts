import { User as UserType } from "../types/users/index.js";
import { User } from "../models/index.js";

export const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const getUserById = async (id: string) => {
  const user = await User.findByPk(id);
  return user;
};

export const createUser = async (props: Omit<UserType, "id">) => {
  const { name, email, phone, address } = props;

  // Check if the user exists by email(unique)
  let user = await User.findOne({ where: { email } });

  if (!user) {
    user = await User.create({
      name,
      email,
      phone,
      address,
    });
  }
  return user;
};
