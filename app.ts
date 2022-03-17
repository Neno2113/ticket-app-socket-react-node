import dotenv from 'dotenv';
import ServerApp from './models/Server';

dotenv.config();

const server = new ServerApp();



server.listen();

