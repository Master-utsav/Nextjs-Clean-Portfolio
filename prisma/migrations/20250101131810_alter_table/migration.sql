/*
  Warnings:

  - You are about to drop the column `userId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Poetry` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Story` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_userId_fkey";

-- DropForeignKey
ALTER TABLE "Poetry" DROP CONSTRAINT "Poetry_userId_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_userId_fkey";

-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_userId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Poetry" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "userId";
