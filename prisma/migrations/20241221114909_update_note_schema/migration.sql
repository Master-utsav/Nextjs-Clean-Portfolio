/*
  Warnings:

  - Added the required column `link` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "description" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
