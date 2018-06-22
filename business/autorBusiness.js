"use strict";
class AutorBusiness {

   

    /**
     * @description Lista todos os autores
     * @param callbackAutor
     */
    findAll(callbackAutor) {
        var sql = 'SELECT * from Autor';

        const SessionFactory = require("../factory/sessionFactory.js");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackAutor(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Lista os autores pelo seu id
     * @param autorEntity
     * @param callbackAutor
     */
    findId(autorEntity, callbackAutor){
        var sql = 'SELECT * from Autor ' +
            'WHERE auId = ("'+ autorEntity.auId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackAutor(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Inserir um novo autor
     * @param autorEntity
     * @param callbackAutor
     */
    insert(autorEntity, callbackAutor) {
        var sql = 'INSERT INTO Autor(auNome) ' +
            'VALUES ("'+ autorEntity.auNome +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    autorEntity.id = rows.insertId;
                    callbackAutor(autorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do autor
     * @param autorEntity
     * @param callbackAutor
     */
    update(autorEntity, callbackAutor){
        var sql = 'UPDATE Autor ' +
            'SET auNome = ("'+ autorEntity.auNome+'") ' +
            'WHERE auId = ("'+ autorEntity.auId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackAutor(autorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o autor informando seu id
     * @param autorEntity
     * @param callbackAutor
     */
    delete(autorEntity, callbackAutor){

        var sql = 'DELETE from Autor ' +
            'WHERE auId = ("'+ autorEntity.auId +'")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection(){
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackAutor(autorEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }
   
    
}

module.exports = AutorBusiness;