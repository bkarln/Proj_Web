const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro na conexão", err));

app.get('/', (req, res) => {
  res.send('API funcionando! 💻');
});

app.listen(3000, () => {
  console.log("🚀 Servidor rodando na porta 3000");
});
