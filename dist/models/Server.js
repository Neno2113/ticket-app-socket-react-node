"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const Sockets_1 = __importDefault(require("./Sockets"));
class ServerApp {
    constructor() {
        this.apiPaths = {};
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.httpServer = (0, http_1.createServer)(this.app);
        this.io = new socket_io_1.Server(this.httpServer, { /* options */});
        this.sockets = new Sockets_1.default(this.io);
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //body parsing
        this.app.use(express_1.default.json());
        this.app.get('/ultimos', (req, res) => {
            res.json({
                ok: true,
                ultimos: this.sockets.ticketList.ultimos13
            });
        });
    }
    routes() {
    }
    listen() {
        this.httpServer.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        });
    }
}
exports.default = ServerApp;
//# sourceMappingURL=Server.js.map