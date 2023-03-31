import conexao from '../infra/conexao.js';

class Colaborador {
    buscaTodos(req, res) {
        let sql = "SELECT * FROM colaborador";

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro);
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        })
    }
    cadastraColaborador(colaborador, res) {
        const sql = "INSERT INTO colaborador SET ?";

        conexao.query(sql, colaborador, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                return res.status(201).json({ "colaborador": colaborador });
            }
        });
    }
}

export default new Colaborador;