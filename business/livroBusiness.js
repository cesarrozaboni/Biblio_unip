"use strict";
class LivroBusiness {

    /**
     * @description Lista todos os livros
     * @param callbackLivro
     */
    findAll(callbackLivro) {
        var sql = 'SELECT * from Livro';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackLivro(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Lista os livros pelo seu id
     * @param livroEntity
     * @param callbackLivro
     */
    findId(livroEntity, callbackLivro) {
        var sql = 'SELECT * from Livro ' +
            'WHERE lvId = ("' + livroEntity.lvId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackLivro(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Inserir um novo livro
     * @param livroEntity
     * @param callbackLivro
     */
    insert(livroEntity, callbackLivro) {
        var sql = 'INSERT INTO Livro( lvTitulo, lvQuantidade, lvFoto, lvAno) ' +
            'VALUES ("' + livroEntity.lvTitulo + '", "'+ livroEntity.lvQuantidade + '", "'  + livroEntity.lvFoto + '", "'+ livroEntity.lvAno + '");';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    livroEntity.id = rows.insertId;
                    callbackLivro(livroEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do Livro
     * @param livroEntity
     * @param callbackLivro
     */
    update(livroEntity, callbackLivro) {
        var sql = 'UPDATE Livro ' +
            'SET lvTitulo = "' + livroEntity.lvTitulo + '", lvQuantidade = "' + livroEntity.lvQuantidade + '", lvFoto = "' + livroEntity.lvFoto + '"' +
            'WHERE lvId = ("' + livroEntity.lvId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackLivro(livroEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o Livro informando seu id
     * @param livroEntity
     * @param callbackLivro
     */
    delete(livroEntity, callbackLivro) {
        const LivroResource = require("../resources/livroResource");
      
        var sql = 'DELETE from Livro ' +
            'WHERE lvId = ("' + livroEntity.lvId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackLivro(livroEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }
}

module.exports = LivroBusiness;