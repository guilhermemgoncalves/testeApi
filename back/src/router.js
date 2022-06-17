import {Router} from 'express';
import { testCompra } from './controller/compraController.js';
import { testProduto } from './controller/produtoController.js';
import { createUsuario, getAllUsuarios, getUsuarioById, updateUsuario, testUsuario } from './controller/usuarioController.js';

const router = Router();

router.get('/outrarota', (req, res) => {
    res.json("Testando o Router")
});

router.get('/usuario', getAllUsuarios);
router.post('/usuario', createUsuario);
router.get('/usuario/:id', getUsuarioById);
router.put('/usuario/:id', updateUsuario); 
router.get('/compra', testCompra);
router.get('/produto', testProduto);
 
export default router;