"use strict";
class LivroAutorResource {

    /**
     * @description Lista todos os livrosAutores
     * @param req
     * @param res
     * @param next
     */
    findAll(req, res, next) {
        const LivroAutorBusiness =  require("../business/livroAutorBusiness");
        this.livroAutorBusiness = new LivroAutorBusiness();
        this.livroAutorBusiness.findAll(
            function callbackLivroAutor(rows){
                res.json(rows);
                next();
            }
        );
    }

    /**
     * @description Lista os livroautores pelo seu id
     * @param req
     * @param res
     * @param next
     */
    findId(req, res, next) {
        const LivroAutorBusiness =  require("../business/livroAutorBusiness");
        this.livroAutorBusiness = new LivroAutorBusiness();

        var livroAutorEntity = {};        
        livroAutorEntity.auId =  req.body.auId;
        livroAutorEntity.lvId =  req.body.lvId;

        this.livroAutorBusiness.findId(livroAutorEntity,
            function callbackLivroAutor(rows) {
                res.json(rows);
                next();
            }
        )
    }

    /**
     * @description Inserir um novo livroautor
     * @param req
     * @param res
     * @param next
     */
    insert(req, res, next){
        const LivroAutorBusiness =  require("../business/livroAutorBusiness");

        var livroAutorEntity = {};
        livroAutorEntity.auId =  req.body.auId;
        livroAutorEntity.lvId =  req.body.lvId;

        this.livroAutorBusiness = new LivroAutorBusiness();
        this.livroAutorBusiness.insert(livroAutorEntity,
            function callbackLivroAutor(retornoLivroAutor){
                res.json(retornoLivroAutor);
                next();
            }
        );
    }

    /**
     * @description Altera os dados do livroautor
     * @param req
     * @param res
     * @param next
     */
    update(req, res, next){
        const LivroAutorBusiness =  require("../business/livroAutorBusiness");

        var livroAutorEntity = {};
        livroAutorEntity.auId =  req.body.auId;
        livroAutorEntity.lvId =  req.body.lvId;

        this.livroAutorBusiness = new LivroAutorBusiness();
        this.livroAutorBusiness.update(livroAutorEntity,
            function callbackLivroAutor(retornoLivroAutor){
                res.json(retornoLivroAutor);
                next();
            }
        );
    }

    /**
     * @description Deleta o livroautor informando seu id
     * @param req
     * @param res
     * @param next
     */
    delete(req, res, next){
        const LivroAutorBusiness =  require("../business/livroAutorBusiness");

        var livroautorEntity = {};
        livroAutorEntity.auId =  req.body.auId;
        livroAutorEntity.lvId =  req.body.lvId;

        this.livroAutorBusiness = new LivroAutorBusiness();
        this.livroAutorBusiness.delete(livroAutorEntity,
            function callbackLivroAutor(retornoLivroAutor){
                res.json(retornoLivroAutor);
                next();
            }
        );
    }


}

module.exports = LivroAutorResource;