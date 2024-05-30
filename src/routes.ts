import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    return res.json({teste: 'teste'});
  })
  
router.post('/criancas/pijama', (req: Request, res: Response) => {
    const {nome, tamanho, cor, preco, quantidade_estoque} = req.query;   //aqui já está pegando de forma dinimanica
    return res.json({nome, tamanho, cor, preco, quantidade_estoque});
  })

// http://localhost:3000/criancas/350?tamanho=P&cor=blue

router.put('/painel/pijama/:id', (req: Request, res: Response) => {
  const {nome, tamanho, cor, preco, quantidade_estoque } = req.body;
  const {id} = req.params;

  return res.json({id, metodo: 'PUT', nome, tamanho, cor, preco, quantidade_estoque})
});


router.delete('/painel/pijama', (req: Request, res: Response) => {
    const {id } = req.body;
    return res.json({metodo: 'DELET', id })
  });

export default router;