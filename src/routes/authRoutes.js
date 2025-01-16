import express from 'express';
import { registrarMaster, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/registrar-master', registrarMaster);
router.post('/login', login);

export default router;
