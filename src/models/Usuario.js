import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, enum: ['master', 'admin'], default: 'master' },
  unidadeSaude: { type: mongoose.Schema.Types.ObjectId, ref: 'UnidadeSaude' }
}, { timestamps: true });

export default mongoose.model('Usuario', UsuarioSchema);
