"use strict";
class LivroAutorBusiness {

    /**
     * @description Lista os livrosAutores
     * @param callbackLivroAutor
     */
    findAll(callbackLivroAutor) {
        var sql = 'SELECT * from LivroAutor';

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
     * @description Lista os livrosAutores pelo seu id
     * @param livroAutorEntity
     * @param callbackLivroAutor
     */
    findId(livroAutorEntity, callbackLivroAutor){
        var sql = 'SELECT * from LivroAutor ' +
            'WHERE lvId = ("'+ livroAutorEntity.lvId +'")';

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
     * @description Inserir um novo livroAutor
     * @param livroAutorEntity
     * @param callbackLivroAutor
     */
    insert(livroAutorEntity, callbackLivroAutor) {
        var sql = 'INSERT INTO LivroAutor(auId, lvId) ' +
            'VALUES ("'+ livroAutorEntity.auId +"," + livroAutorEntity.lvId  + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    livroAutorEntity.id = rows.insertId;
                    callbackLivroAutor(livroAutorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do LivroAutor
     * @param livroAutorEntity
     * @param callbackLivroAutor
     */
    update(livroAutorEntity, callbackLivroAutor){
        var sql = 'UPDATE LivroAutor ' +
            'SET auId, lvId = ("'+ autorEntity.auId + "," + livroentity.lvId  + '") ' +
            'WHERE lvId && auId = ("'+ livroAutorEntity.lvId + "," + livroAutorEntity.auId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackLivroAutor(livroAutorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o LivroAutor informando seu id
     * @param livroAutorEntity
     * @param callbackLivroAutor
     */
    delete(livroAutorEntity, callbackLivroAutor){
        const LivroAutorResource = require("../resources/livroAutorResource");
        var livroAutorResource = new LivroAutorResource();

        livroAutorResource.delete(livroAutorEntity)

        var sql = 'DELETE from LivroAutor ' +
            'WHERE lvId = ("'+ livroAutorEntity.lvId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackLivroAutor(livroAutorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }
}

module.exports = LivroAutorBusiness;