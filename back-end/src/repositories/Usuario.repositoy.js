const database = require("../adapters/databaseServer")

class UsuarioRepository {
    static async buscarDados(nome) {
        return await database.query("SELECT * from usuários where nome=?", [nome])
    }

    static async inserirDados(nome, funcao, email, telefone, camara) {
        return await database.query("INSERT INTO usuários (nome, função, email, telefone, camara ) VALUES (?, ?, ?, ?, ?)", 
        [nome, funcao, email, telefone, camara])
    }

    static async atualizarDados(antigo_nome, nome, funcao, email, telefone, camara) {
        return await database.query("UPDATE usuários SET nome=?, função=?, email=?, telefone=?, camara=? WHERE nome=?", 
        [nome, funcao, email, telefone, camara, antigo_nome])
    }

    static async deletarDados(nome) {
        await database.query("DELETE FROM usuários where nome=?", 
        [nome])
    }
}

module.exports = UsuarioRepository