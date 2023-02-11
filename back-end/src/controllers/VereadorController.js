const VereadoresRepositoy = require("../repositories/vereadores.repository")

module.exports = class VereadorController {
    static async get(req, res) {
        const {nome} = req.body;

        try {
            return res.send({success: await VereadoresRepositoy.buscarDados(nome)})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async post(req, res) {
        const {nome, partido, camara} = req.body;

        try {
            await VereadoresRepositoy.inserirDados(nome, partido, camara)
            return res.send({success: "vereador inserido com sucesso"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async put(req, res) {
        const {nome_atual, nome, partido, camara} = req.body;

        try {
            await VereadoresRepositoy.atualizarDados(nome_atual, nome, partido, camara)
            return res.send({success: "vereador atualizado com sucesso"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async del(req, res) {
        const {nome} = req.body;

        try {
            await VereadoresRepositoy.deletarDados(nome)
            return res.send({success: "vereador excluído"})
        } catch (error) {
            return res.send({err: error})
        }
    }
}