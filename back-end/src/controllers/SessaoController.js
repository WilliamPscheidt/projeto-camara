const SessaoRepositoy = require("../repositories/Sessoes.repositoy")
const AgendarSessoes = require("../services/AgendarSessoes")

class SessaoController {
    static async get() {
        const {nome_camara} = req.body

        try {
            return res.send({sucesso: SessaoRepositoy.buscarDados(nome_camara)})
        } catch (error) {
            return res.send({error: error})
        }
    }

    static async post(req, res) {
        const { camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador} = req.body;

        try {
            await SessaoRepositoy.inserirDados(camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador)
        } catch (error) {
            return res.send({ error: error })
        }

        AgendarSessoes.cronjob(camara, minuto, dia, mes, hora)

        res.send({ sucesso: "sessão inserida" })
    }

    static async delete() {
        const {id} = req.body

        try {
            await SessaoRepositoy.deletarDados(id)
            return res.send({sucesso: "sessão removida"})
        } catch (error) {
            return res.send({error: error})
        }
    }
}

module.exports = SessaoController