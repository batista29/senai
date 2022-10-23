const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "solicitacoes"
});

function listarProdutos(req, res) {
    let query = "SELECT * FROM Produtos";

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function listarProdutosDepartamentos(req, res) {
    let query = `SELECT dep.Nome_Depto, p.nome_produto from Departamentos dep inner join solicitacoes s on dep.Cod_Depto = s.Cod_Depto inner join Itens_Solicitacao it on it.Num_Sol = s.Num_Sol inner join produtos p on p.cod_produto = it.cod_produto where p.nome_produto = '${req.body.Nome_produto}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function listarProdutosData(req, res) {
    let query = `select p.nome_produto, s.Data_sol from produtos p inner join Itens_Solicitacao it on p.cod_produto = it.cod_produto inner join solicitacoes s on s.Num_Sol = it.Num_Sol where month(Data_sol) = '${req.body.Data_sol()}' and Year (Data_sol) = '${req.body.Data_sol()}'`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarProdutos(req, res) {
    let query = `INSERT INTO Produtos VALUES (${req.body.Cod_Produto},'${req.body.Nome_produto}')`;

    conDB.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarProdutos,
    listarProdutosDepartamentos,
    listarProdutosData,
    cadastrarProdutos
}