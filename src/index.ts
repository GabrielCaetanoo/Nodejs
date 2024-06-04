import express, {Request, Response} from "express";
import Router from './routes';


const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(Router);

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: "Route not found"}); 
})

server.listen(3000); 