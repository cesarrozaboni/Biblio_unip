"use strict";
class livroEmprestimoBusiness {

    /**
     * @description Lista os livrosEmprestimos
     * @param callbackLivroEmprestimo
     */
    findAll(callbackLivroEmprestimo) {
        var sql = 'SELECT * from livroEmprestimo';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackLivroEmprestimo(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Lista os livrosEmprestimos pelo seu id
     * @param livroEmprestimoEntity
     * @param callbackLivroEmprestimo
     */
    findId(livroEmprestimoEntity, callbackLivroEmprestimo){
        var sql = 'SELECT * from LivroEmprestimo ' +
            'WHERE livroEmprestimoId = ("'+ livroEmprestimoEntity.id +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackLivroAutor(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Inserir um novo livroEmprestimo
     * @param livroEmprestimoEntity
     * @param callbackLivroEmprestimo
     */
    insert(livroEmprestimoEntity, callbackLivroEmprestimo) {
        var sql = 'INSERT INTO LivroEmprestimo(emId, lvId) ' +
            'VALUES ("'+ emprestimoEntity.id +"," + livroEntity.id  + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    livroEmprestimoEntity.id = rows.insertId;
                    callbackLivroAutor(livroEmprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do LivroEmprestimo
     * @param livroEmprestimoEntity
     * @param callbackLivroEmprestimo
     */
    update(livroEmprestimoEntity, callbackLivroEmprestimo){
        var sql = 'UPDATE LivroEmprestimo ' +
            'SET emId, lvId = ("'+ emprestimoEntity.auId + "," + livroentity.lvId  + '") ' +
            'WHERE lvId && emId = ("'+ livroEntity.lvId +","+ emprestimoEntity.id+'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackLivroEmprestimo(livroEmprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o LivroEmprestimo informando seu id
     * @param livroEmprestimoEntity
     * @param callbackLivroEmprestimo
     */
    delete(livroEmprestimoEntity, callbackLivroEmprestimo){
        const LivroEmprestimoResource = require("../resources/livroEmprestimoResource");
        var livroEmprestimoResource = new LivroEmprestimoResource();

        livroEmprestimoResource.delete(livroEmprestimoEntity)

        var sql = 'DELETE from livroEmprestimo ' +
            'WHERE lvId = ("'+ livroEntity.lvId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackLivroEmprestimo(livroEmprestimoEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }
}

module.exports = LivroEmprestimoBusiness;