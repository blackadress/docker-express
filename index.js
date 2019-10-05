const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Hola desde docker")
})

app.listen(3000, () => {
  console.log("Dentro del contenedor desde el puerto 3000")
})