import fastify from "fastify";
import fastifyJwt from "@fastify/jwt";
import { ZodError } from "zod";
import { env } from "@/env";
import { usersRoutes } from "@/http/controllers/users/routes";
import { gymsRoutes } from "@/http/controllers/gyms/routes";
import { checkInsRoutes } from "@/http/controllers/check-ins/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
});

app.register(usersRoutes);
app.register(gymsRoutes);
app.register(checkInsRoutes);

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    //TODO: log it to an external error logging service
  }

  reply.status(500).send({ message: "Internal server error." });
});
