const database = require("../adapters/databaseServer")

class SessaoRepositoy {
    static async buscarDados(nome_camara) {
        return await database.query("SELECT * from sessões where camara=?",
         [nome_camara])
    }

    static async buscarDadosSocket() {
        return await database.query("SELECT * from sessões where camara=?, dia=?, mes=?, hora=?, minuto=?",
         [nome_camara, dia, mes, hora, minuto])
    }

    static async inserirDados(camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador) {
        return await database.query("INSERT INTO sessões (camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador])
    }

    static async deletarDados(nome_camara) {
        await database.query("DELETE FROM sessões where id=?", 
        [id])
    }
}

module.exports = SessaoRepositoy