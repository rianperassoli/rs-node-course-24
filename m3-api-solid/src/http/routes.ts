import { FastifyInstance } from "fastify";
import { verifyJwt } from "@/http/middlewares/verify-jwt";

import { register } from "@/http/controllers/register";
import { authenticate } from "@/http/controllers/authenticate";
import { profile } from "@/http/controllers/profile";

export async function appRoutes(app: FastifyInstance) {
  app.post("/users", register);
  app.post("/sessions", authenticate);

  /* Authenticated Routes */
  app.get("/me", { onRequest: [verifyJwt] }, profile);
}
