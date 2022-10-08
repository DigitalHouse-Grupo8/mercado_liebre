const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3001;

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
  })

  app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
  })

  app.use(express.static('public'))

app.listen(port,()=>{
  console.log(`Servidor corriendo en el puerto:: ${port}`)
})

