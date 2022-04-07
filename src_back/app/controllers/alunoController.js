const db = require('../models')
const Aluno = db.aluno

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' })
    return
  }

  const aluno = new Aluno({
    nome: req.body.nome,
    curso: req.body.curso,
    ra: req.body.ra,
    telefone: req.body.telefone,
    email: req.body.email,
    published: req.body.published ? req.body.published : false,
  })

  aluno
    .save(aluno)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Tutorial.',
      })
    })
}

exports.findAll = async (req, res) => {
  const nome = req.query.nome
  var condition = nome ? { title: { $regex: new RegExp(nome), $options: 'i' } } : {}

  await Aluno.find(condition)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id

  Aluno.findById(id)
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found Tutorial with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Tutorial with id=' + id })
    })
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    })
  }

  const id = req.params.id

  Aluno.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`,
        })
      } else res.send({ message: 'Tutorial was updated successfully.' })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Tutorial with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Aluno.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        })
      } else {
        res.send({
          message: 'Tutorial was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Tutorial with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Aluno.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all tutorials.',
      })
    })
}

exports.findAllPublished = (req, res) => {
  Aluno.find({ published: true })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}
