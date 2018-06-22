"use strict";
class EmprestimoResource {

    /**
     * @description Lista todos os emprestimos
     * @param req
     * @param res
     * @param next
     */
    findAll(req, res, next) {
        const EmprestimoBusiness =  require("../business/emprestimoBusiness");
        this.emprestimoBusiness = new EmprestimoBusiness();
        this.emprestimoBusiness.findAll(
            function callbackEmprestimo(rows){
                res.json(rows);
                next();
            }
        );
    }

    /**
     * @description Lista os emprestimo pelo seu id
     * @param req
     * @param res
     * @param next
     */
    findId(req, res, next) {
        const EmprestimoBusiness =  require("../business/emprestimoBusiness");
        this.emprestimoBusiness = new EmprestimoBusiness();

        var emprestimoEntity = {};
        emprestimoEntity.emId =  req.params.emId;

        this.emprestimoBusiness.findId(emprestimoEntity,
            function callbackEmprestimo(rows) {
                res.json(rows);
                next();
            }
        )
    }

    /**
     * @description Inserir um novo emprestimo
     * @param req
     * @param res
     * @param next
     */
    insert(req, res, next){
        const EmprestimoBusiness =  require("../business/emprestimoBusiness");
        
        var emprestimoEntity = {};
            emprestimoEntity.usIdArray =  req.body.usIdArray;
            emprestimoEntity.emDataInicio = req.body.emDataInicio;
            emprestimoEntity.emDataFim = req.body.emDataFim;
            emprestimoEntity.emDataDevolucao = req.body.emDataDevolucao;

        this.emprestimoBusiness = new EmprestimoBusiness();
        this.emprestimoBusiness.insert(emprestimoEntity,
            function callbackEmprestimo(retornoEmprestimo){
                res.json(retornoEmprestimo);
                next();
            }
        );
    }

    /**
     * @description Altera os dados do emprestimo
     * @param req
     * @param res
     * @param next
     */
    update(req, res, next){
        const EmprestimoBusiness =  require("../business/emprestimoBusiness");

        var emprestimoEntity = {};
        emprestimoEntity.emId = req.params.emId;
        emprestimoEntity.usIdArray =  req.body.usIdArray;
        emprestimoEntity.emDataInicio = req.body.emDataInicio;
        emprestimoEntity.emDataFim = req.body.emDataFim;
        emprestimoEntity.emDataDevolucao = req.body.emDataDevolucao;

        this.emprestimoBusiness = new EmprestimoBusiness();
        this.emprestimoBusiness.update(emprestimoEntity,
            function callbackEmprestimo(retornoEmprestimo){
                res.json(retornoEmprestimo);
                next();
            }
        );
    }

    /**
     * @description Deleta o emprestimo informando seu id
     * @param req
     * @param res
     * @param next
     */
    delete(req, res, next){
        const EmprestimoBusiness =  require("../business/emprestimoBusiness");

        var emprestimoEntity = {};
        emprestimoEntity.emId =  req.params.emId;

        this.emprestimoBusiness = new EmprestimoBusiness();
        this.emprestimoBusiness.delete(emprestimoEntity,
            function callbackEmprestimo(retornoEmprestimo){
                res.json(retornoEmprestimo);
                next();
            }
        );
    }


}

module.exports = EmprestimoResource;