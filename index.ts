import fastify from "fastify";
import cors from "@fastify/cors";
import { initModels } from "./src/models/index.js"; // Import DB & User model
import { userRouter } from "./src/routes/user.routes.js";

const app = fastify();

await app.register(cors, { origin: "*" });

app.get("/ping", async (_, res) => res.code(200).send("PONG!"));

const start = async () => {
  try {
    await initModels();

    app.register(userRouter, { prefix: "/api/v1/users" });

    await app.ready();
    await app.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`🚀 Server running on http://localhost:3000`);
  } catch (err) {
    console.error("❌ Error starting app:", err);
    process.exit(1);
  }
};

start();
