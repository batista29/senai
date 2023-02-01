/*
  Warnings:

  - Made the column `horario_tarefa` on table `tarefa` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tarefa` MODIFY `horario_tarefa` VARCHAR(191) NOT NULL,
    MODIFY `horario_encerramento` VARCHAR(191) NULL;
