-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `vendedorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalhe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prod` INTEGER NOT NULL,
    `id_venda` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_vendedorId_fkey` FOREIGN KEY (`vendedorId`) REFERENCES `Vendedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_id_venda_fkey` FOREIGN KEY (`id_venda`) REFERENCES `Vendas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalhe` ADD CONSTRAINT `Detalhe_id_prod_fkey` FOREIGN KEY (`id_prod`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
