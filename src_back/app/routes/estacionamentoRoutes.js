module.exports = (app) => {
  const estacionamentos = require('../controllers/estacionamentoController.js')

  var router = require('express').Router()

  router.post('/', estacionamentos.create)
  router.get('/', estacionamentos.findAll)
  router.get('/published', estacionamentos.findAllPublished)
  router.get('/:id', estacionamentos.findOne)
  router.put('/:id', estacionamentos.update)
  router.delete('/:id', estacionamentos.delete)
  router.delete('/', estacionamentos.deleteAll)

  app.use('/api/estacionamentos', router)
}
