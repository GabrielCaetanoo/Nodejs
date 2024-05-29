import express, {Request, Response} from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  return res.json({teste: 'teste'});
})
server.listen(3000); 