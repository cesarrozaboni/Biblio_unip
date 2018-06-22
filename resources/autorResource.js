"use strict";
class AutorResource {

    /**
     * @description Lista todos os autores
     * @param req
     * @param res
     * @param next
     */
    findAll(req, res, next) {
        const AutorBusiness =  require("../business/autorBusiness");
        this.autorBusiness = new AutorBusiness();
        this.autorBusiness.findAll(
            function callbackAutor(rows){
                res.json(rows);
                next();
            }
        );
    }

    /**
     * @description Lista os autores pelo seu id
     * @param req
     * @param res
     * @param next
     */
    findId(req, res, next) {
        const AutorBusiness =  require("../business/autorBusiness");
        this.autorBusiness = new AutorBusiness();

        var autorEntity = {};
        autorEntity.auId =  req.params.auId;

        this.autorBusiness.findId(autorEntity,
            function callbackAutor(rows) {
                res.json(rows);
                next();
            }
        )
    }

    /**
     * @description Inserir um novo autor
     * @param req
     * @param res
     * @param next
     */
    insert(req, res, next){
        const AutorBusiness =  require("../business/autorBusiness");

        var autorEntity = {};
        autorEntity.auNome =  req.body.auNome;

        this.autorBusiness = new AutorBusiness();
        this.autorBusiness.insert(autorEntity,
            function callbackAutor(retornoAutor){
                res.json(retornoAutor);
                next();
            }
        );
    }

    /**
     * @description Altera os dados do autor
     * @param req
     * @param res
     * @param next
     */
    update(req, res, next){
        const AutorBusiness =  require("../business/autorBusiness");

        var autorEntity = {};
        autorEntity.auId =  req.params.auId;
        autorEntity.auNome =  req.body.auNome;

        this.autorBusiness = new AutorBusiness();
        this.autorBusiness.update(autorEntity,
            function callbackAutor(retornoAutor){
                res.json(retornoAutor);
                next();
            }
        );
    }

    /**
     * @description Deleta o autor informando seu id
     * @param req
     * @param res
     * @param next
     */
    delete(req, res, next){
        const AutorBusiness =  require("../business/autorBusiness");
        
        var autorEntity = {};
        autorEntity.auId =  req.params.auId;
       

        this.autorBusiness = new AutorBusiness();
        this.autorBusiness.delete(autorEntity,
            function callbackAutor(retornoAutor){
                res.json(retornoAutor);
                next();
            }
        );
    }


}

module.exports = AutorResource;