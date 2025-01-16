import express from 'express';
import { criarUnidadeSaude } from '../controllers/unidadeSaudeController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, criarUnidadeSaude);

export default router;
