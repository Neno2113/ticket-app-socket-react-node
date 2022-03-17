import { uuid } from 'uuidv4';


export class Ticket {

    public id:string;
    public number: number;
    public posicion?:string;
    public agente?:string;
    public tipo?:string;

    constructor( number: number ){
        this.id = uuid();
        this.number = number
        this.posicion = '';
        this.agente = '';
        this.tipo = '';
    }
}



