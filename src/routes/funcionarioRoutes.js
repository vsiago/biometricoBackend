import express from 'express';
import { criarFuncionario } from '../controllers/funcionarioController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/:unidadeId', authMiddleware, criarFuncionario);

export default router;
