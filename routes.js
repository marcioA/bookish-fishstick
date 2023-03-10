import express from 'express';
import Fluxo from './models/fluxo.js';

const routes = express.Router();

routes.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

routes.get('/', (req, res) => {
    return res.status(201).json({ hello: 'pagina inicial logo será implementada' })
});

routes.get('/transacao', (req, res) => {
    return Fluxo.buscaTodos(req, res);
});

routes.get('/transacao/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        id,
        msg: "Ok"
    })
});

routes.post('/transacao', (req, res) => {
    const { titulo, valor, tipo, categoria } = req.body;
    var transacao = {
        id: 1,
        "title": titulo,
        "transaction_value": valor,
        "transaction_type": tipo,
        "product_owner": categoria,
    }

    return res.status(200).json(transacao)
})

routes.put('/transacao/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        msg: "Ok"
    })
})


routes.delete('/transacao/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ msg: 'o registro "' + id + '" foi apagado com sucesso.' })
});

export default routes;