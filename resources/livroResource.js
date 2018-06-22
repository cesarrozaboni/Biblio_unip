"use strict";
class LivroResource {

    /**
     * @description Lista todos os livros
     * @param req
     * @param res
     * @param next
     */
    findAll(req, res, next) {
        const LivroBusiness =  require("../business/livroBusiness");
        this.livroBusiness = new LivroBusiness();
        this.livroBusiness.findAll(
            function callbackLivro(rows){
                res.json(rows);
                next();
            }
        );
    }

    /**
     * @description Lista os livros pelo seu id
     * @param req
     * @param res
     * @param next
     */
    findId(req, res, next) {
        const LivroBusiness =  require("../business/livroBusiness");
        this.livroBusiness = new LivroBusiness();

        var livroEntity = {};
        livroEntity.lvId =  req.params.lvId;

        this.livroBusiness.findId(livroEntity,
            function callbackLivro(rows) {
                res.json(rows);
                next();
            }
        )
    }

    /**
     * @description Inserir um novo livro
     * @param req
     * @param res
     * @param next
     */
    insert(req, res, next){
        const LivroBusiness =  require("../business/livroBusiness");

        var livroEntity = {};
        livroEntity.lvTitulo =  req.body.lvTitulo;
        livroEntity.lvQuantidade = req.body.lvQuantidade;
        livroEntity.lvFoto = req.body.lvFoto;
        livroEntity.lvAno = req.body.lvAno;

        this.livroBusiness = new LivroBusiness();
        this.livroBusiness.insert(livroEntity,
            function callbackLivro(retornoLivro){
                res.json(retornoLivro);
                next();
            } 
        );
    }

    /**
     * @description Altera os dados do livro
     * @param req
     * @param res
     * @param next
     */
    update(req, res, next){
        const LivroBusiness =  require("../business/livroBusiness");

        var livroEntity = {};
        livroEntity.lvId =  req.params.lvId;
        livroEntity.lvTitulo =  req.body.lvTitulo;
        livroEntity.lvQuantidade = req.body.lvQuantidade;
        livroEntity.lvFoto = req.body.lvFoto;
        livroEntity.lvAno = req.body.lvAno;

        this.livroBusiness = new LivroBusiness();
        this.livroBusiness.update(livroEntity,
            function callbackLivro(retornoLivro){
                res.json(retornoLivro);
                next();
            }
        );
    }

    /**
     * @description Deleta o livro informando seu id
     * @param req
     * @param res
     * @param next
     */
    delete(req, res, next){
        const LivroBusiness =  require("../business/livroBusiness");

        var livroEntity = {};
        livroEntity.lvId =  req.params.lvId;

        this.livroBusiness = new LivroBusiness();
        this.livroBusiness.delete(livroEntity,
            function callbackLivro(retornoLivro){
                res.json(retornoLivro);
                next();
            }
        );
    }


}

module.exports = LivroResource;