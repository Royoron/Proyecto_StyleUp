import "dotenv/config";
import prismaPkg from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { hashPassword } from "../src/utils/password.js";

const { PrismaClient } = prismaPkg;
const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL || "file:./dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  const correo = process.env.SUPERADMIN_EMAIL;
  const password = process.env.SUPERADMIN_PASSWORD;

  if (!correo || !password) {
    throw new Error("Faltan SUPERADMIN_EMAIL o SUPERADMIN_PASSWORD en el entorno");
  }

  const contrasena = await hashPassword(password);

  await prisma.superAdmin.upsert({
    where: { correo },
    create: { correo, contrasena, activo: true },
    update: { contrasena, activo: true },
  });

  await prisma.estadoBarbero.upsert({
    where: { estado: "Disponible" },
    create: { estado: "Disponible" },
    update: {},
  });
  await prisma.estadoBarbero.upsert({
    where: { estado: "Ocupado" },
    create: { estado: "Ocupado" },
    update: {},
  });
  await prisma.estadoBarbero.upsert({
    where: { estado: "Descanso" },
    create: { estado: "Descanso" },
    update: {},
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

