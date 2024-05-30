import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({teste: 'teste'});
  })
  
router.get('/criancas/:id_pijama', (req: Request, res: Response) => {
    console.log(req.params);
    const id_pijama = req.params.id_pijama;
    return res.json({id: id_pijama, nome: 'pijama com bolinhas azuis'})
  })

export default router;