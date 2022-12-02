var jwt = require('jsonwebtoken');
require('dotenv').config();

const login = (req, res) => {
    const user = req.body;

    //CONSULTA AO BANCO PARA VERIFICAR SE O USUARIO ESTA CADASTRADO
    //SELECT * FROM usuarios WHERE email = user.email AND senha = user.senha
    const data = {
        "id": 1,
        "nome": "Fulano da Silva",
        "role": "ADMIN"
    };

    jwt.sign(data, process.env.KEY,{expiresIn: '1m'} ,function (err, token) {
        if (err == null) {
            data["token"] = token;
            res.status(200).json(data).end();
        } else {
            res.status(404).json(err).end();
        }
    });

}

const remover = (req, res) => {
    const {id} = req.params;
    //DELETE FROM USUARIOS WHERE ID = ID
    res.status(200).json({msg:"Usuario deletado"}).end();
}

module.exports = {
    login,
    remover
}