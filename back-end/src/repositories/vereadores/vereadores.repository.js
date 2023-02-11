const database = require("../../adapters/databaseServer")

class VereadoresRepositoy {
    static async buscarDados(nome) {
        return await database.query("SELECT * FROM vereadores where nome=?", 
        [nome])
    }

    static async inserirDados(nome, partido, camara) {
        return await database.query("INSERT INTO vereadores (nome, partido, camara) VALUES (?, ?, ?)", 
        [nome, partido, camara])
    }

    static async atualizarDados(nome_atual, nome, partido, camara) {
        return await database.query("UPDATE vereadores SET nome=?, partido=?, camara=? WHERE nome=?", 
        [nome, partido, camara, nome_atual])
    }

    static async deletarDados(nome) {
        return await database.query("DELETE FROM vereadores where nome=?",
        [nome])
    }
}

module.exports = VereadoresRepositoy