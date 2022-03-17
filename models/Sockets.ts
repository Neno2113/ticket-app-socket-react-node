import { Socket } from "socket.io";
import { TicketList, TicketProps } from "./TicketList";


interface DataTicketProps {
    ticket: string
}

interface AgentsProps {
    agente:string;
    posicion:string
}


class Sockets {

    private io: any;
    public ticketList = new TicketList;

    constructor( io:string ){

        this.io = io;


        this.socketEvents();

    }


    socketEvents(){
        this.io.on('connection', ( socket:Socket ) => {
            console.log("conectado");
            
            
            socket.on('solicitar-ticket', ( data:DataTicketProps , callback: (data: TicketProps) => void) => {
                const { ticket } = data;
                const newTicket  = this.ticketList.createTicket( ticket );
                callback( newTicket! );
                
            })

            socket.on('solicitar-ticket-caja', ( data:DataTicketProps, callback: (data: TicketProps) => void) => {
                const { ticket } = data;
                const newTicket  = this.ticketList.createTicket( ticket );
                callback( newTicket! );
                
            })

            
            socket.on('solicitar-ticket-servicios', ( data:DataTicketProps, callback: (data: TicketProps) => void) => {
                const { ticket } = data;
                const newTicket  = this.ticketList.createTicket( ticket );
                callback( newTicket! );
            })

            socket.on('next-ticket', ( { agente, posicion }:AgentsProps, callback: (data: TicketProps) => void) => {
                const ticket = this.ticketList.asignarTicket( agente, posicion );
                console.log(ticket);
                
                callback( ticket! );

                this.io.emit('ticket-asignado', this.ticketList.ultimos13 );
            })



        })
    }
}



export default Sockets;