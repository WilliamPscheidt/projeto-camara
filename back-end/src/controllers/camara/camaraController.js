const CamaraRepository = require("../../repositories/camara/camara.repositoy")

module.exports = class CamaraController {
    static async get(req, res) {
        const {nome_camara} = req.body

        try {
            return res.send({sucesso: await CamaraRepository.buscarDados(nome_camara)})
        } catch (error) {
            return res.send({erro: "Houve um erro interno, tente novamente."})
        }
    }

    static async post(req, res) {
        const {nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        try {
            await CamaraRepository.inserirDados(nome, presidente, tecnico, telefone, email, endereco, cnpj, logo)
            return res.send({success: "camara criada"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async put(req, res) {
        const {antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        try {
            await CamaraRepository.atualizarDados(antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo)
            return res.send({success: "camara atualizada"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async del(req, res) {
        const {nome_camara} = req.body

        try {
            await CamaraRepository.deletarDados(nome_camara)
            return res.send({success: "camara excluída"})
        } catch (error) {
            return res.send({err: error})
        }
    }
}