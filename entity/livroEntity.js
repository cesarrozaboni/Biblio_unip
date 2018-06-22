"use strict";

class LivroEntity{
    constructor(){
        var lvId;
        var lvTitulo;
        var lvQuantidade;
        var lvFoto;
        var lvAno;

        function getLvId(){
            return this.lvId;
        }
        function setLvId(lvId){
            this.lvId = lvId;
        }
        function getLvTitulo(){
            return this.lvTitulo;
        }
        function setLvTitulo(lvTitulo){
            this.lvTitulo = lvTitulo;
        }
        function getLvQuantidade(){
            return this.lvQuantidade;
        }
        function setLVQuantidade(lvQuantidade){
            this.lvQuantidade = lvQuantidade;
        }
        function getLvFoto(){
            return this.lvFoto;
        }
        function setLvFoto(lvFoto){
            this.lvFoto = lvFoto;
        }
        function setLvAno(lvAno){
            this.lvAno = lvAno;
        }
        function getLvAno(){
            return this.lvAno;
        }
    }
}