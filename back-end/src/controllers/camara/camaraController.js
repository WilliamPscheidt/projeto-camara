const database = require("../../adapters/databaseServer")

module.exports = class CamaraController {
    static async get(req, res) {
        const {nome_camara} = req.body

        try {
            const resultado = await database.query("SELECT * from camaras where nome=?", [nome_camara])
            return res.send({sucesso: resultado})
        } catch (error) {
            return res.send({erro: "Houve um erro interno, tente novamente."})
        }
    }

    static async post(req, res) {
        const {nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        try {
            await database.query("INSERT INTO camaras (nome, presidente, técnico, telefone, email, endereço, cnpj, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
            [nome, presidente, tecnico, telefone, email, endereco, cnpj, logo])
            return res.send({success: "camara criada"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async put(req, res) {
        const {antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        try {
            await database.query("UPDATE camaras SET nome=?, presidente=?, técnico=?, telefone=?, email=?, endereço=?, cnpj=?, logo=? WHERE nome=?", 
            [nome, presidente, tecnico, telefone, email, endereco, cnpj, logo, antigo_nome])
            return res.send({success: "camara atualizada"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async del(req, res) {
        const {nome_camara} = req.body

        try {
            await database.query("DELETE FROM camaras where nome=?", 
            [nome_camara])
            return res.send({success: "camara excluída"})
        } catch (error) {
            return res.send({err: error})
        }
    }
}