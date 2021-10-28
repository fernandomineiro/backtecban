module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      nome: String,
      numero: Number,
      nome_razao: String,
      numero_cadastro: Number,
      nome_civil: String,
      data_nascimento: Date,
      estado_civil: String,
      sexo: String,
      nacionalidade: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("pessoaFisica", schema);
  return Tutorial;
};
