"use strict";

class AutorEntity {

    constructor() {
        var auId;
        var auNome = "";

        function getAuId() {
            return auId;
        }

        function setAuId(auId) {
            this.auId = auId;
        }

        function getAuNome() {
            return this.auNome;
        }

        function setAuNome(auNome) {
            this.auNome = auNome;
        }
    };
}