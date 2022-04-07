module.exports = (app) => {
  const alunos = require('../controllers/alunoController.js')

  var router = require('express').Router()

  router.post('/', alunos.create)
  router.get('/', alunos.findAll)
  router.get('/published', alunos.findAllPublished)
  router.get('/:id', alunos.findOne)
  router.put('/:id', alunos.update)
  router.delete('/:id', alunos.delete)
  router.delete('/', alunos.deleteAll)

  app.use('/api/alunos', router)
}
