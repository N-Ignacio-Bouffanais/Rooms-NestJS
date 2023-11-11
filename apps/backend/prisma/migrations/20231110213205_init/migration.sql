-- CreateTable
CREATE TABLE "subject" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "limit" INTEGER NOT NULL,
    "professorId" TEXT,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professors" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "rut" TEXT NOT NULL,

    CONSTRAINT "professors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "rut" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StudentToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "subject_name_key" ON "subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "professors_email_key" ON "professors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professors_rut_key" ON "professors"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "students_rut_key" ON "students"("rut");

-- CreateIndex
CREATE UNIQUE INDEX "_StudentToSubject_AB_unique" ON "_StudentToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentToSubject_B_index" ON "_StudentToSubject"("B");

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToSubject" ADD CONSTRAINT "_StudentToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentToSubject" ADD CONSTRAINT "_StudentToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
