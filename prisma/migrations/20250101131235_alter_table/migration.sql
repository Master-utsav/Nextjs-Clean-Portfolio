/*
  Warnings:

  - You are about to drop the column `link` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `subTitle` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Poetry` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LikedPosts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `day` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quote` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_postId_fkey";

-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_postId_fkey";

-- DropForeignKey
ALTER TABLE "Poetry" DROP CONSTRAINT "Poetry_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_postId_fkey";

-- DropForeignKey
ALTER TABLE "Story" DROP CONSTRAINT "Story_postId_fkey";

-- DropForeignKey
ALTER TABLE "_LikedPosts" DROP CONSTRAINT "_LikedPosts_A_fkey";

-- DropForeignKey
ALTER TABLE "_LikedPosts" DROP CONSTRAINT "_LikedPosts_B_fkey";

-- DropIndex
DROP INDEX "Article_postId_key";

-- DropIndex
DROP INDEX "Notes_postId_key";

-- DropIndex
DROP INDEX "Poetry_postId_key";

-- DropIndex
DROP INDEX "Quote_postId_key";

-- DropIndex
DROP INDEX "Story_postId_key";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "link",
DROP COLUMN "postId",
DROP COLUMN "subTitle";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Poetry" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "content",
DROP COLUMN "description",
DROP COLUMN "postId",
DROP COLUMN "title",
ADD COLUMN     "day" TEXT NOT NULL,
ADD COLUMN     "quote" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "postId";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "_LikedPosts";
