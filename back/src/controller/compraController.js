import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const testCompra= (req, res) => {
    res.json("Testando a rota de Compra")
}



export{ testCompra };