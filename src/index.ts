import express from "express";
import Router from './routes';


const server = express();

server.use(Router);

server.listen(3000); 