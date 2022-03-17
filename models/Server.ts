import express, { Application, Request, Response } from "express";
import { createServer }  from "http";
import { Server } from "socket.io";
import cors from 'cors';

import Sockets from './Sockets';

class ServerApp {

    private app:Application;
    private port: string;
    private httpServer:any;
    public io: any;
    public sockets:any;
    private apiPaths = {
   
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '4000'

        this.httpServer = createServer( this.app );

        this.io = new Server( this.httpServer, { /* options */ } );

        this.sockets = new Sockets( this.io );

        this.middlewares();

        this.routes();
    }

    middlewares(){
        //cors
        this.app.use( cors() )

        //body parsing
        this.app.use( express.json() );

        this.app.use( express.static('public') );

        this.app.get('/ultimos', ( req:Request, res:Response) => {

            res.json({
                ok: true,
                ultimos: this.sockets.ticketList.ultimos13
            })
        })

    }


    routes(){

     
    }


    listen() {
        this.httpServer.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
            
        })
    }
}


export default ServerApp;