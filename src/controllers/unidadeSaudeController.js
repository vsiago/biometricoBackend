import { salvarUnidadeSaude, buscarUnidadesPorCriador } from '../services/unidadeSaudeService.js';

export const criarUnidadeSaude = async (req, res) => {
  try {
    const { nome, endereco } = req.body;
    const novaUnidade = await salvarUnidadeSaude({ nome, endereco, criadoPor: req.usuarioId });
    res.status(201).json(novaUnidade);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar unidade de saúde.' });
  }
};
