/*
  Warnings:

  - You are about to drop the `_ProfessorToSubject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProfessorToSubject" DROP CONSTRAINT "_ProfessorToSubject_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfessorToSubject" DROP CONSTRAINT "_ProfessorToSubject_B_fkey";

-- AlterTable
ALTER TABLE "subject" ADD COLUMN     "professorId" TEXT;

-- DropTable
DROP TABLE "_ProfessorToSubject";

-- AddForeignKey
ALTER TABLE "subject" ADD CONSTRAINT "subject_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
