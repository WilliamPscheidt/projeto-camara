const database = require("../adapters/databaseServer")

class CamaraRepository {
    static async buscarDados(nome_camara) {
        return await database.query("SELECT * from camaras where nome=?", [nome_camara])
    }

    static async inserirDados(nome, presidente, tecnico, telefone, email, endereco, cnpj, logo) {
        return await database.query("INSERT INTO camaras (nome, presidente, técnico, telefone, email, endereço, cnpj, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [nome, presidente, tecnico, telefone, email, endereco, cnpj, logo])
    }

    static async atualizarDados(antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo) {
        return await database.query("UPDATE camaras SET nome=?, presidente=?, técnico=?, telefone=?, email=?, endereço=?, cnpj=?, logo=? WHERE nome=?", 
        [nome, presidente, tecnico, telefone, email, endereco, cnpj, logo, antigo_nome])
    }

    static async deletarDados(nome_camara) {
        await database.query("DELETE FROM camaras where nome=?", 
        [nome_camara])
    }
}

module.exports = CamaraRepository