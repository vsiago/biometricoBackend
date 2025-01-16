import { salvarFuncionario, buscarFuncionariosPorUnidade } from '../services/funcionarioService.js';

export const criarFuncionario = async (req, res) => {
  try {
    const { nome, email, endereco, dadosBiometricos } = req.body;
    const novaFuncionario = await salvarFuncionario({
      nome,
      email,
      endereco,
      dadosBiometricos,
      unidadeSaude: req.params.unidadeId
    });
    res.status(201).json(novaFuncionario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar funcionário.' });
  }
};
