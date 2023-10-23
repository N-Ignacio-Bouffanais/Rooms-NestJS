/*
  Warnings:

  - You are about to drop the `_StudentToSubject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_StudentToSubject" DROP CONSTRAINT "_StudentToSubject_A_fkey";

-- DropForeignKey
ALTER TABLE "_StudentToSubject" DROP CONSTRAINT "_StudentToSubject_B_fkey";

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "studentId" TEXT;

-- DropTable
DROP TABLE "_StudentToSubject";

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "subject"("id") ON DELETE SET NULL ON UPDATE CASCADE;
