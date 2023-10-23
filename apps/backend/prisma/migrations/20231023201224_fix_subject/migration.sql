/*
  Warnings:

  - You are about to drop the column `studentId` on the `students` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_studentId_fkey";

-- AlterTable
ALTER TABLE "students" DROP COLUMN "studentId",
ADD COLUMN     "subjectId" TEXT;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
