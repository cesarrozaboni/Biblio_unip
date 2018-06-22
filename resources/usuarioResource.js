"use strict";
class UsuarioResource {

    /**
     * @description Lista todos os usuarios
     * @param req
     * @param res
     * @param next
     */
    findAll(req, res, next) {
        const UsuarioBusiness =  require("../business/usuarioBusiness");
        this.usuarioBusiness = new UsuarioBusiness();
        this.usuarioBusiness.findAll(
            function callbackUsuario(rows){
                res.json(rows);
                next();
            }
        );
    }

    /**
     * @description Lista os usuarios pelo seu id
     * @param req
     * @param res
     * @param next
     */
    findId(req, res, next) {
        const UsuarioBusiness =  require("../business/usuarioBusiness");
        this.usuarioBusiness = new UsuarioBusiness();

        var usuarioEntity = {};
        usuarioEntity.usId =  req.params.usId;

        this.usuarioBusiness.findId(usuarioEntity,
            function callbackUsuario(rows) {
                res.json(rows);
                next();
            }
        )
    }

    /**
     * @description Inserir um novo usuario
     * @param req
     * @param res
     * @param next
     */
    insert(req, res, next){
        const UsuarioBusiness =  require("../business/usuarioBusiness");

        var usuarioEntity = {};
        usuarioEntity.usNome =  req.body.usNome;
        usuarioEntity.usTelefone = req.body.usTelefone;
        usuarioEntity.usEmail = req.body.usEmail;
        usuarioEntity.usSenha = req.body.usSenha;

        this.usuarioBusiness = new UsuarioBusiness();
        this.usuarioBusiness.insert(usuarioEntity,
            function callbackUsuario(retornoUsuario){
                res.json(retornoUsuario);
                next();
            }
        );
    }

    /**
     * @description Altera os dados do usuario
     * @param req
     * @param res
     * @param next
     */
    update(req, res, next){
        const UsuarioBusiness =  require("../business/usuarioBusiness");

        var usuarioEntity = {};
        usuarioEntity.usId =  req.params.usId;
        usuarioEntity.usNome =  req.body.usNome;
        usuarioEntity.usTelefone = req.body.usTelefone;
        usuarioEntity.usEmail = req.body.usEmail;
        usuarioEntity.usSenha = req.body.usSenha;

        this.usuarioBusiness = new UsuarioBusiness();
        this.usuarioBusiness.update(usuarioEntity,
            function callbackUsuario(retornoUsuario){
                res.json(retornoUsuario);
                next();
            }
        );
    }

    /**
     * @description Deleta o usuario informando seu id
     * @param req
     * @param res
     * @param next
     */
    delete(req, res, next){
        const UsuarioBusiness =  require("../business/usuarioBusiness");

        var usuarioEntity = {};
        usuarioEntity.usId =  req.params.usId;

        this.usuarioBusiness = new UsuarioBusiness();
        this.usuarioBusiness.delete(usuarioEntity,
            function callbackUsuario(retornoUsuario){
                res.json(retornoUsuario);
                next();
            }
        );
    }

    /**
     * @description Login de usuario
     * @param req
     * @param res
     * @param next
     */

   login(req, res, next) {
            const UsuarioBusiness =  require("../business/usuarioBusiness");
            this.usuarioBusiness = new UsuarioBusiness();
    
            var usuarioEntity = {};
            usuarioEntity.usNome =  req.body;//.usNome
            usuarioEntity.usSenha = req.body;//.usSenha;
            
            this.usuarioBusiness.login(usuarioEntity,
                function callbackUsuario(rows) {
                    res.json(rows);
                    next();
                }
            )
        }
}

module.exports = UsuarioResource;