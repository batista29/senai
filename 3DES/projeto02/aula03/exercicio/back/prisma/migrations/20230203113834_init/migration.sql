/*
  Warnings:

  - Added the required column `quantidade` to the `Detalhe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detalhe` ADD COLUMN `quantidade` INTEGER NOT NULL;
