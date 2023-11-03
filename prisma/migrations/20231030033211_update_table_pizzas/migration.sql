/*
  Warnings:

  - You are about to alter the column `photo` on the `pizzas` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `pizzas` MODIFY `photo` VARCHAR(191) NOT NULL;
