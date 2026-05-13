-- CreateTable
CREATE TABLE "clientes" (
    "cedula_cliente" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "fecha_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "barberos" (
    "cedula_barbero" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fecha_registro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "barberos_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidades" ("id_especialidad") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "especialidades" (
    "id_especialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "especialidad" TEXT NOT NULL,
    "tiempo_estimado" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "citas" (
    "id_cita" TEXT NOT NULL PRIMARY KEY,
    "cedula_cliente" TEXT NOT NULL,
    "cedula_barbero" TEXT NOT NULL,
    "id_especialidad" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "hora" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Pendiente',
    CONSTRAINT "citas_cedula_cliente_fkey" FOREIGN KEY ("cedula_cliente") REFERENCES "clientes" ("cedula_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "citas_cedula_barbero_fkey" FOREIGN KEY ("cedula_barbero") REFERENCES "barberos" ("cedula_barbero") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "citas_id_especialidad_fkey" FOREIGN KEY ("id_especialidad") REFERENCES "especialidades" ("id_especialidad") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "historial_citas" (
    "id_historial" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cedula_cliente" TEXT NOT NULL,
    "id_cita" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "historial_citas_cedula_cliente_fkey" FOREIGN KEY ("cedula_cliente") REFERENCES "clientes" ("cedula_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "historial_citas_id_cita_fkey" FOREIGN KEY ("id_cita") REFERENCES "citas" ("id_cita") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "estados_barbero" (
    "id_estado" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estado" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "horarios_barbero" (
    "id_horario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cedula_barbero" TEXT NOT NULL,
    "id_estado" INTEGER NOT NULL,
    "hora_inicio" TEXT NOT NULL,
    "hora_fin" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    CONSTRAINT "horarios_barbero_cedula_barbero_fkey" FOREIGN KEY ("cedula_barbero") REFERENCES "barberos" ("cedula_barbero") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "horarios_barbero_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "estados_barbero" ("id_estado") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "superadmin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "creado_en" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token_hash" TEXT NOT NULL,
    "subjectType" TEXT NOT NULL,
    "subjectId" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "revokedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_correo_key" ON "clientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "barberos_correo_key" ON "barberos"("correo");

-- CreateIndex
CREATE INDEX "barberos_id_especialidad_idx" ON "barberos"("id_especialidad");

-- CreateIndex
CREATE UNIQUE INDEX "especialidades_especialidad_key" ON "especialidades"("especialidad");

-- CreateIndex
CREATE INDEX "citas_fecha_idx" ON "citas"("fecha");

-- CreateIndex
CREATE INDEX "citas_cedula_barbero_fecha_idx" ON "citas"("cedula_barbero", "fecha");

-- CreateIndex
CREATE INDEX "citas_estado_idx" ON "citas"("estado");

-- CreateIndex
CREATE INDEX "historial_citas_cedula_cliente_fecha_idx" ON "historial_citas"("cedula_cliente", "fecha");

-- CreateIndex
CREATE UNIQUE INDEX "estados_barbero_estado_key" ON "estados_barbero"("estado");

-- CreateIndex
CREATE INDEX "horarios_barbero_cedula_barbero_fecha_idx" ON "horarios_barbero"("cedula_barbero", "fecha");

-- CreateIndex
CREATE UNIQUE INDEX "superadmin_correo_key" ON "superadmin"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_hash_key" ON "refresh_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "refresh_tokens_subjectType_subjectId_idx" ON "refresh_tokens"("subjectType", "subjectId");

-- CreateIndex
CREATE INDEX "refresh_tokens_expiresAt_idx" ON "refresh_tokens"("expiresAt");
