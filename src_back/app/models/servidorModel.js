module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      nome: String,
      ramal: String,
      sala: String,
      cargo: String,
      nuemroMatricula: String,
      telefone: String,
      email: String,
      published: Boolean,
    },
    { timestamps: true }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  return mongoose.model('Servidor', schema)
}
