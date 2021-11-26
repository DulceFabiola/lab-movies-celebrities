//1. IMPORTACIONES
const mongoose = require("mongoose");

//2.SCHEMA
const celebritySchema = mongoose.Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    timestamps: true, //Establecer la fecha en la cual fue creado
  }
);
//3. MODELO
const Celebrity = mongoose.model("Celebrity", celebritySchema);

//4. EXPORTACION
module.exports = Celebrity;
