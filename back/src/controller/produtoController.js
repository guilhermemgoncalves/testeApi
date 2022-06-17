import { PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const testProduto = (req, res) => {
    res.json("Testando a rota de Produto")
}


export{ testProduto };
