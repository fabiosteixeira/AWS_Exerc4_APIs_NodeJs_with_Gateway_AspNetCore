const Produto = require('../model/produto')

let produtos = [
  new Produto(1, 1, 'Martelo', 'Ferramentas'),
  new Produto(2, 2, 'Furadeira', 'Ferramentas'),
  new Produto(3, 3, 'Batom', 'Cosméticos'),
  new Produto(4, 4, 'Celular', 'Eletrônicos')
]

exports.get = (req, res, next) => {
  res.status(200).send(produtos);
};

exports.getById = (req, res, next) => {
  var achou = false;
  produtos.forEach(function(produto){
      if (produto.id == req.params.id) {
          achou = true;
          res.status(200).send(produto)            
      }            
  })
  if (!achou)
      res.status(200).send('Produto não encontrado!');    
};

exports.post = (req, res, next) => {
  produto = new Produto(req.body.id, 
                          req.body.codigo,
                          req.body.nome,
                          req.body.categoria)
  produtos.push(produto)
  res.status(200).send('Produto adicionado com sucesso!');
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  var achou = false;
  for (i = 0; i < produtos.length; i++) { 
      if (produtos[i].id == id) {
          produtos[i].codigo = req.body.codigo;
          produtos[i].nome = req.body.nome;
          achou = true;
          res.status(200).send(`Produto id ${id} atualizado com sucesso!`);
      }                    
  }
  if (!achou) 
      res.status(200).send('Produto não encontrada!');       
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  var achou = false;
  for (i = 0; i < produtos.length; i++) { 
      if (produtos[i].id == id) {
          produtos.splice(i, 1)
          i--
          achou = true;
          res.status(200).send(`Produto id ${id} excluído com sucesso!`);
      }                    
  }
  if (!achou) 
      res.status(200).send('Produto não encontrada!'); 
};