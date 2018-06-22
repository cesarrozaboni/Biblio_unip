"use strict";
class EmprestimoBusiness {

    /**
     * @description Lista todos os empréstimos
     * @param callbackEmprestimo
     */
    findAll(callbackEmprestimo) {
        var sql = 'SELECT * from Emprestimo';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackEmprestimo(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Lista os emprestimos pelo seu id
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    findId(emprestimoEntity, callbackEmprestimo){
        var sql = 'SELECT * from Emprestimo ' +
            'WHERE emId = ("'+ emprestimoEntity.emId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackEmprestimo(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Inserir um novo Emprestimo
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    insert(emprestimoEntity, callbackEmprestimo) {
       
        var sql = 'INSERT INTO Emprestimo (usId, emDataInicio, emDataFim, emDataDevolucao) ' +
            'VALUES ("' +  emprestimoEntity.usIdArray +  '", "' + emprestimoEntity.emDataInicio + '", "' + emprestimoEntity.emDataFim + '", "' + emprestimoEntity.emDataDevolucao + '");';
        
        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    emprestimoEntity.id = rows.insertId;
                    callbackEmprestimo(emprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do Livro
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    update(emprestimoEntity, callbackEmprestimo){
        var sql = 'UPDATE Emprestimo ' +
            'SET usId = "' + emprestimoEntity.usIdArray + '", emDataInicio = "' + emprestimoEntity.emDataInicio + '", emDataFim = "' + emprestimoEntity.emDataFim + '", emDataDevolucao ="' + emprestimoEntity.emDataDevolucao +
            '"WHERE emId = "'+ emprestimoEntity.emId + '"';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackEmprestimo(emprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o Emprestimo informando seu id
     * @param emprestimoEntity
     * @param callbackEmprestimo
     */
    delete(emprestimoEntity, callbackEmprestimo){
        const EmprestimoResource = require("../resources/emprestimoResource");
       
        var sql = 'DELETE FROM Emprestimo ' +
            'WHERE emId ='+ emprestimoEntity.emId;

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackEmprestimo(emprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }
}

module.exports = EmprestimoBusiness;