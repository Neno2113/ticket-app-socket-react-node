import { Ticket } from "./Ticket";


export interface TicketProps {
    id:string;
    number: number;
    posicion?:string;
    agente?:string;
    tipo?:string;
}

export class TicketList {

    public asignados: TicketProps[ ];
    public pendientes: TicketProps[ ];
    public ultimoNumero: number;
    public ultimoNumeroCaja: number;
    public ultimoNumeroServicioCliente: number;


    constructor( ){
        this.ultimoNumero = 0;
        this.ultimoNumeroCaja = 0;
        this.ultimoNumeroServicioCliente = 0;
        this.asignados = [];
        this.pendientes = [];

    }


    get nextNumber(){
        this.ultimoNumero++;
        return this.ultimoNumero;
    }

    get nextNumberCaja(){
        this.ultimoNumeroCaja++;
        return this.ultimoNumeroCaja;
    }

    get nextNumberServicioCliente(){
        this.ultimoNumeroServicioCliente++;
        return this.ultimoNumeroServicioCliente;
    }


    get ultimos13(){
        return this.asignados.slice(0, 13);
    }

    createTicket( ticket:string ){

        let newTicket: TicketProps

        switch (ticket) {
            case 'caja':
                newTicket = new Ticket( this.nextNumberCaja );
                newTicket.tipo = 'C';
                this.pendientes.push( newTicket )
                return newTicket;
            case 'reparar':
                newTicket = new Ticket( this.nextNumber );
                newTicket.tipo = 'R';
                this.pendientes.push( newTicket )
                return newTicket;
            case 'servicios':
                newTicket = new Ticket( this.nextNumberServicioCliente );
                newTicket.tipo = 'SC';
                this.pendientes.push( newTicket )
                return newTicket;
        
            default:
                return null;
        }
    
    }


    asignarTicket( agente:string, posicion:string ){

        if( this.pendientes.length === 0){
            return null;
        }

        const nextTicket = this.pendientes.shift();
        nextTicket!.agente = agente;
        nextTicket!.posicion = posicion;
        

        this.asignados.unshift( nextTicket! );

        return nextTicket;

    }
}