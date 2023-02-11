const UsuarioRepository = require("../repositories/Usuario.repositoy")

module.exports = class UsuarioController {
    static async get(req, res) {
        const {nome} = req.body;

        try {
            return res.send({success: await UsuarioRepository.buscarDados(nome)})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async post(req, res) {
        const {nome, funcao, email, telefone, camara} = req.body;

        try {
            await UsuarioRepository.inserirDados(nome, funcao, email, telefone, camara)
            return res.send({success: "usuario inserido com sucesso"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async put(req, res) {
        const {antigo_nome, nome, funcao, email, telefone, camara} = req.body;

        try {
            await UsuarioRepository.atualizarDados(antigo_nome, nome, funcao, email, telefone, camara)
            return res.send({success: "usuário atualizado com sucesso"})
        } catch (error) {
            return res.send({err: error})
        }
    }

    static async del(req, res) {
        const {nome} = req.body;

        try {
            await UsuarioRepository.deletarDados(nome)
            return res.send({success: "usuário excluído"})
        } catch (error) {
            return res.send({err: error})
        }
    }
}