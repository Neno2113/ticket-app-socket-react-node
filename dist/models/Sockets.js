"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TicketList_1 = require("./TicketList");
class Sockets {
    constructor(io) {
        this.ticketList = new TicketList_1.TicketList;
        this.io = io;
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log("conectado");
            socket.on('solicitar-ticket', (data, callback) => {
                const { ticket } = data;
                const newTicket = this.ticketList.createTicket(ticket);
                callback(newTicket);
            });
            socket.on('solicitar-ticket-caja', (data, callback) => {
                const { ticket } = data;
                const newTicket = this.ticketList.createTicket(ticket);
                callback(newTicket);
            });
            socket.on('solicitar-ticket-servicios', (data, callback) => {
                const { ticket } = data;
                const newTicket = this.ticketList.createTicket(ticket);
                callback(newTicket);
            });
            socket.on('next-ticket', ({ agente, posicion }, callback) => {
                const ticket = this.ticketList.asignarTicket(agente, posicion);
                console.log(ticket);
                callback(ticket);
                this.io.emit('ticket-asignado', this.ticketList.ultimos13);
            });
        });
    }
}
exports.default = Sockets;
//# sourceMappingURL=Sockets.js.map