"use strict";
class UsuarioBusiness {

    /**
     * @description Lista todos os usuários
     * @param callbackUsuario
     */
    findAll(callbackUsuario) {
        var sql = 'SELECT * from Usuario';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackUsuario(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Lista os Usuarios pelo seu id
     * @param usuarioEntity
     * @param callbackUsuario
     */
    findId(usuarioEntity, callbackUsuario) {
        var sql = 'SELECT * from Usuario ' +
            'WHERE usId = ("' + usuarioEntity.usId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackUsuario(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
       * @description Login do usuario
       * @param usuarioEntity
       * @param callbackUsuario
       */
    login(usuarioEntity, callbackUsuario) {
        
        var sql = 'SELECT from Usuario ' +
            'WHERE usNome = ("' + usuarioEntity.usNome + '")';// && usSenha = ("' + usuarioEntity.usSenha + '")';

       
        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;
                    callbackUsuario(rows);
                    if (_that.session)
                        _that.session.end();
                });
        });

    }

    /**
     * @description Inserir um novo Usuario
     * @param usuarioEntity
     * @param callbackUsuario
     */
    insert(usuarioEntity, callbackUsuario) {
        var sql = 'INSERT INTO Usuario(usNome, usTelefone, usEmail, usSenha) ' +
            'VALUES ("' + usuarioEntity.usNome + '", "' + usuarioEntity.usTelefone + ' ", "' + usuarioEntity.usEmail + '", "' + usuarioEntity.usSenha + '");';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    usuarioEntity.id = rows.insertId;
                    callbackUsuario(usuarioEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Altera os dados do usuario
     * @param usuarioEntity
     * @param callbackUsuario
     */
    update(usuarioEntity, callbackUsuario) {
        var sql = 'UPDATE Usuario ' +
            'SET usNome = "' + usuarioEntity.usNome + '", usTelefone = "' + usuarioEntity.usTelefone + '", usEmail = "' + usuarioEntity.usEmail + '", usSenha = "' + usuarioEntity.usSenha + '"' +
            'WHERE usId = ("' + usuarioEntity.usId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {
                    if (err)
                        throw err;

                    callbackUsuario(usuarioEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });
    }

    /**
     * @description Deleta o Usuario informando seu id
     * @param usuarioEntity
     * @param callbackUsuario
     */
    delete(usuarioEntity, callbackUsuario) {
        const UsuarioResource = require("../resources/usuarioResource");

        var sql = 'DELETE from Usuario ' +
            'WHERE usId = ("' + usuarioEntity.usId + '")';

        const SessionFactory = require("../factory/sessionFactory");
        this.session = new SessionFactory();
        var _that = this;
        this.session.connect(function callbackConnection() {
            _that.session.pool.query(sql,
                function (err, rows, fields) {

                    if (err)
                        throw err;

                    callbackUsuario(usuarioEntity);
                    if (_that.session)
                        _that.session.end();
                });
        });


    }



}


module.exports = UsuarioBusiness;