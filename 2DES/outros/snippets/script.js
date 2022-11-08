const del = (req, res) => {
    con.query(departamento.del(req.body), (err, resut)=>{
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
               res.status(404).json(err).end();
        else
          res.status(400).json(err).end();
 });
}

const create = (req, res) => {
    con.query(departamento.create(req.body), (err, resut)=>{
        if (err == null)
            res.status(201).end();
        else
             if (err.sqlState == 23000)
                 res.status(406).json(err).end();
        else
          res.status(500).json(err).end();
   });
}

const readAll = (req, res) => {
    con.query(produto.readAll(), (err, result)=>{
        if (err == null)
            res.status(204).end();
        else
          res.status(500).json(err).end();
   });
}

const update = (req, res) => {
    con.query(item.readAll(), (err, result)=>{
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
               res.status(404).end();
        else
          res.status(500).json(err).end();
   });
}

module.exports = {
    create,
    readAll,
    update,
    del,
}