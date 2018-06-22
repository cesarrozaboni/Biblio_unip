"use strict";

class UsuarioEntity {

    constructor() {
        var usId;
        var usNome;
        var usTelefone;
        var usEmail;
        var usSenha;

        function getUsId() {
            return usId;
        }

        function setUsId(usId) {
            this.usId = usId;
        }

        function getUsNome() {
            return this.usNome;
        }

        function setUsNome(usNome) {
            this.usNome = usNome;
        }
        function getUsTelefone(){
            return this.usTelefone;
        }
        function setUsTelefone(usTelefone){
            this.usTelefone = usTelefone;
        }
        function getUsEmail(){
            return this.usEmail;
        }
        function  setUsEmail(usEmail){
            this.usEmail = usEmail;
        }
        function getUsSenha(){
            return this.usSenha;
        }
        function setUsSenha(usSenha){
            this.usSenha = usSenha;
        }
    };
}