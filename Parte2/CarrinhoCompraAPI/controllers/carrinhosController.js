exports.get = (req, res, next) => {
    res.status(200).send("Retorna a lista de itens do carrinho");
};

exports.getById = (req, res, next) => {
    res.status(200).send("Retorna um determinado item do carrinho");  
};

exports.post = (req, res, next) => {
    res.status(200).send("Insere um item no carrinho");
};

exports.put = (req, res, next) => {
    res.status(200).send("Atualiza um item no carrinho");     
};

exports.delete = (req, res, next) => {
    res.status(200).send("Deleta um item do carrinho");
};