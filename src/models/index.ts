import { sequelize } from "../config/db.init.js";

// Initialize all the models and relationships
export const initModels = async () => {
  await sequelize.sync({ force: false });
};

// Export all the models
export { User } from "./user.model.js";
