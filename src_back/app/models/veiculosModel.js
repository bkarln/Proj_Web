module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      tipo: String,
      modelo: String,
      fabricante: String,
      placa: String,
      cor: String,
      donoId: String,
      tipoDono: String,
      published: Boolean,
    },
    { timestamps: true }
  )

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
  })

  return mongoose.model('Veiculo', schema)
}
