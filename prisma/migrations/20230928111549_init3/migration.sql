/*
  Warnings:

  - You are about to drop the column `no_referals` on the `UserProfile` table. All the data in the column will be lost.
  - Added the required column `no_referrals` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - The required column `referral_code` was added to the `UserProfile` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `UserProfile` DROP COLUMN `no_referals`,
    ADD COLUMN `no_referrals` INTEGER NOT NULL,
    ADD COLUMN `referral_code` VARCHAR(191) NOT NULL;
