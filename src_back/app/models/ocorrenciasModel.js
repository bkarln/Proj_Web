module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      placa: String,
      estacionamentoId: String,
      data: Date,
      observacao: String,
      published: Boolean,
    },
    { timestamps: true }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  return mongoose.model('Ocorrencia', schema)
}
