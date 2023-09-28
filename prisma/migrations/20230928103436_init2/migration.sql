/*
  Warnings:

  - You are about to drop the column `no_refferals` on the `UserProfile` table. All the data in the column will be lost.
  - Added the required column `no_referals` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UserProfile` DROP COLUMN `no_refferals`,
    ADD COLUMN `no_referals` INTEGER NOT NULL;
