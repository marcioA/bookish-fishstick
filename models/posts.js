import conexao from '../infra/conexao.js';

class Posts {
    buscaTodos(req, res) {
        let sql = "SELECT * FROM posts";

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                console.log(erro);
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        })
    }

}

export default new Posts;