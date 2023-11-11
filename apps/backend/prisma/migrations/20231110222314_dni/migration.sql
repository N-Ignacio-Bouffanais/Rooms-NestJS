/*
  Warnings:

  - You are about to drop the column `rut` on the `professors` table. All the data in the column will be lost.
  - You are about to drop the column `rut` on the `students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dni]` on the table `professors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dni` to the `professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "professors_rut_key";

-- DropIndex
DROP INDEX "students_rut_key";

-- AlterTable
ALTER TABLE "professors" DROP COLUMN "rut",
ADD COLUMN     "dni" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "students" DROP COLUMN "rut",
ADD COLUMN     "dni" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "professors_dni_key" ON "professors"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "students_dni_key" ON "students"("dni");
