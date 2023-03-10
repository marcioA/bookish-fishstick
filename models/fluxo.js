import conexao from '../infra/conexao.js';

class Fluxo {
    buscaTodos(req, res) {
        let sql = "SELECT * FROM fluxo";

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        })
    }
}

export default new Fluxo;