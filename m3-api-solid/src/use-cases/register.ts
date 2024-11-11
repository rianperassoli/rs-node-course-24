import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository";

interface RegisterUseCaseRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterUseCaseRequestBody) {
  const prismaUsersRepository = new PrismaUsersRepository();

  const passwordHash = await hash(password, 10);

  const userWithSameEmail = await prismaUsersRepository.findByEmail(email);

  if (userWithSameEmail) {
    throw new Error("E-mail already exists");
  }

  await prismaUsersRepository.create({
    name,
    email,
    password_hash: passwordHash,
  });
}
