"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketList = void 0;
const Ticket_1 = require("./Ticket");
class TicketList {
    constructor() {
        this.ultimoNumero = 0;
        this.ultimoNumeroCaja = 0;
        this.ultimoNumeroServicioCliente = 0;
        this.asignados = [];
        this.pendientes = [];
    }
    get nextNumber() {
        this.ultimoNumero++;
        return this.ultimoNumero;
    }
    get nextNumberCaja() {
        this.ultimoNumeroCaja++;
        return this.ultimoNumeroCaja;
    }
    get nextNumberServicioCliente() {
        this.ultimoNumeroServicioCliente++;
        return this.ultimoNumeroServicioCliente;
    }
    get ultimos13() {
        return this.asignados.slice(0, 13);
    }
    createTicket(ticket) {
        let newTicket;
        switch (ticket) {
            case 'caja':
                newTicket = new Ticket_1.Ticket(this.nextNumberCaja);
                newTicket.tipo = 'C';
                this.pendientes.push(newTicket);
                return newTicket;
            case 'reparar':
                newTicket = new Ticket_1.Ticket(this.nextNumber);
                newTicket.tipo = 'R';
                this.pendientes.push(newTicket);
                return newTicket;
            case 'servicios':
                newTicket = new Ticket_1.Ticket(this.nextNumberServicioCliente);
                newTicket.tipo = 'SC';
                this.pendientes.push(newTicket);
                return newTicket;
            default:
                return null;
        }
    }
    asignarTicket(agente, posicion) {
        if (this.pendientes.length === 0) {
            return null;
        }
        const nextTicket = this.pendientes.shift();
        nextTicket.agente = agente;
        nextTicket.posicion = posicion;
        this.asignados.unshift(nextTicket);
        return nextTicket;
    }
}
exports.TicketList = TicketList;
//# sourceMappingURL=TicketList.js.map