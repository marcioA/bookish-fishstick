import express from 'express';
import Colaborador from './models/colaborador.js';

const routes = express.Router();

routes.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

routes.get('/', (req, res) => {
    return res.status(201).json({ hello: 'pagina inicial logo será implementada' })
});

routes.get('/colaborador', (req, res) => {
    return Colaborador.buscaTodos(req, res);
});

routes.get('/colaborador/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        id,
        msg: "Ok"
    })
});

routes.post('/colaborador', (req, res) => {
    const { colab_nome, colab_cargo, colab_imagem, colab_time } = req.body;
    var colaborador = {
        "nome": colab_nome,
        "cargo": colab_cargo,
        "imagem": colab_imagem,
        "colab_time": colab_time,
    }

    return Colaborador.cadastraColaborador(colaborador, res);
})

routes.put('/colaborador/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({
        msg: "Ok"
    })
})


routes.delete('/colaborador/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ msg: 'o registro "' + id + '" foi apagado com sucesso.' })
});

export default routes;