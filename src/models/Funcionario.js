import mongoose from 'mongoose';

const FuncionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  endereco: { type: String, required: true },
  dadosBiometricos: { type: String, required: true },
  unidadeSaude: { type: mongoose.Schema.Types.ObjectId, ref: 'UnidadeSaude', required: true }
}, { timestamps: true });

export default mongoose.model('Funcionario', FuncionarioSchema);
