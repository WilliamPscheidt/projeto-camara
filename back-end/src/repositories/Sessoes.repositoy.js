const database = require("../adapters/databaseServer")

class SessaoRepositoy {
    static async buscarDados(nome_camara) {
        return await database.query("SELECT * from camaras where nome=?", [nome_camara])
    }

    static async inserirDados(camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador) {
        return await database.query("INSERT INTO sessões (camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador])
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

module.exports = SessaoRepositoy