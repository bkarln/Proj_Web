const dbConfig = require('../config/db.config.js')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.usuario = require('./usuarioModel.js')(mongoose)
db.aluno = require('./alunoModel.js')(mongoose)
db.estacionamento = require('./estacionamentoModel.js')(mongoose)
db.servidor = require('./servidorModel.js')(mongoose)
db.veiculo = require('./veiculosModel.js')(mongoose)
db.visitante = require('./visitanteModel.js')(mongoose)
db.ocorrencias = require('./ocorrenciasModel')(mongoose)

module.exports = db
