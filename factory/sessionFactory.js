"use strict";
class SessionFactory {

    /**
     * @description Cria o Pool de conexões
     */
    constructor(){
        var mysql	= require('mysql');

        this.pool = mysql.createPool({
            multipleStatements :  true,
            host : 'unipbiblio.mysql.dbaas.com.br',
            user  : 'unipbiblio',
            password : 'Unip123#',  
            database : 'unipbiblio'
        });
    }

    /**
     * @description Abre a conexão com o banco de dados
     */
    connect(callbackConnection){
        this.pool.getConnection(function (err, connection) {
            callbackConnection();
        });
    }

    /**
     * @description Encerra a conexão com o banco de dados
     */
    end(){
        if (this.pool)
            this.pool.end();
    }

}
    
module.exports = SessionFactory;