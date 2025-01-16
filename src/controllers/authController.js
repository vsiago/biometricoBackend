import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { salvarUsuario, buscarUsuarioPorEmail } from '../services/usuarioService.js';

export const registrarMaster = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const novoUsuario = await salvarUsuario({ nome, email, senha: senhaHash, role: 'master' });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário master.' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await buscarUsuarioPorEmail(email);

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    const token = jwt.sign({ id: usuario._id, role: usuario.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar login.' });
  }
};
