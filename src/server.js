const express = require('express')
const app = express()

const UserController = require('./controllers/UserController');
const TesteContoller = require('./controllers/TesteController');

app.get('/user', UserController.listarUsuario);

app.get('/user/:id',UserController.usuarioLista);

app.get('/teste',TesteContoller.Testando);

const port = process.env.PORT || 3007 
app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});





