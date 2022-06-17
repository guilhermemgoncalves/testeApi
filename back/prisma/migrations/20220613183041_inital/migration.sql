-- CreateTable
CREATE TABLE `compra` (
    `idcompra` INTEGER NOT NULL AUTO_INCREMENT,
    `idusuario` INTEGER NOT NULL,
    `idproduto` INTEGER NULL,
    `datacompra` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idproduto_idx`(`idproduto`),
    INDEX `idusuario_idx`(`idusuario`),
    PRIMARY KEY (`idcompra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `idproduto` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeproduto` VARCHAR(45) NOT NULL,
    `preco` DOUBLE NOT NULL,

    PRIMARY KEY (`idproduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `idusuario` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idusuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `idproduto` FOREIGN KEY (`idproduto`) REFERENCES `produto`(`idproduto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario`(`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
