module.exports = {
  listarUsuario: (req, res) => {
    res.json('Outro')
  },
  usuarioLista: (req, res) => {
    const id = req.params.id;
    res.json(`Usuario com o ID: ${id}`)
  }
};

