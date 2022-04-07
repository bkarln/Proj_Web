module.exports = (app) => {
  const ocorrencias = require('../controllers/ocorrenciasController.js')

  var router = require('express').Router()

  router.post('/', ocorrencias.create)
  router.get('/', ocorrencias.findAll)
  router.get('/published', ocorrencias.findAllPublished)
  router.get('/:id', ocorrencias.findOne)
  router.put('/:id', ocorrencias.update)
  router.delete('/:id', ocorrencias.delete)
  router.delete('/', ocorrencias.deleteAll)

  app.use('/api/ocorrencias', router)
}
