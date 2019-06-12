exports.get = (req, res, next) => {
    res.status(200).send("Retorna a lista de pedidos");
};

exports.getById = (req, res, next) => {
    res.status(200).send("Retorna um determinado pedido");  
};

exports.post = (req, res, next) => {
    res.status(200).send("Insere um novo pedido");
};

exports.put = (req, res, next) => {
    res.status(200).send("Atualiza um pedido");     
};

exports.delete = (req, res, next) => {
    res.status(200).send("Deleta um pedido");
};