"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const uuidv4_1 = require("uuidv4");
class Ticket {
    constructor(number) {
        this.id = (0, uuidv4_1.uuid)();
        this.number = number;
        this.posicion = '';
        this.agente = '';
        this.tipo = '';
    }
}
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map