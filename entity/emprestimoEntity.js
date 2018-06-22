"use strict"

class EmprestimoEntity {

    constructor() {
        var emId;
        var usIdArray = [];
        var emDataInicio;
        var emDataFim;
        var emDataDevolucao;
       
        function setUsIdArray(usIdArray){
            this.usIdArray = usIdArray.push;
        }

        function getUsIdArray(){
            return usIdArray.pop;
        }

        function getEmId() {
            return this.emId;
        }

       

        function setEmId(emId) {
            this.emId = emId;
        }

        function getUsId() {
            return this.usId;
        }

        function setUsId(usId) {
            this.usId = usId;
        }

        function getEmDataInicio() {
            return this.emDataInicio;
        }

        function setEmDataInicio(emDataInicio) {
            this.emDataInicio = emDataInicio;
        }

        function getEmDataFim() {
            return this.emDataFim;
        }

        function setEmDataFim(emDataFim) {
            this.emDataFim = emDataFim;
        }

        function getEmDataDevolucao() {
            return this.emDataDevolucao;
        }

        function setEmDataDevolucao(emDataDevolucao) {
            this.emDataDevolucao = emDataDevolucao;
        }

    }

}