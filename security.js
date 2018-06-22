"use strict";

/**
 * Classe Security
 * @author Cesar
 * @version 1.0
 */
class Security {

    /**
     * Valida Autorização customizada
     * @returns {cross}
     */
    authorization() {
            
        var auth = function (req, res, next) {

            var retorno = {};

            try {


                var headerAuthorization = req.headers["authorization"].toString().split(" ")
                var key = headerAuthorization[0];
                var token = headerAuthorization[1];

                if (key != "Unip") {

                    var retorno = { resultado: null, erro: "Acesso não autorizado" };
                    res.json(retorno)
                }
                else {
                    var serverTokenBase64 = "VW5pcDEyMyMkQA==";
                    var clienteTokenBase64 = token;

                    if (serverTokenBase64 != clienteTokenBase64) {
                        retorno = { resultado: null, erro: "Acesso não autorizado" };
                        res.json(retorno);
                        return next();
                    }
                    else {
                        return next();
                    }
                }
            }
            catch (e) {
                retorno = { resultado: null, erro: "Acesso não autorizado" };
                res.json(retorno)
            }

        }

        return auth;
    }
}

module.exports = new Security();