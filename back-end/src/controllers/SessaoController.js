const SessaoRepositoy = require("../repositories/Sessoes.repositoy")
const io = require("../adapters/socket")
const cron = require("node-cron");

const agendarSessao = (camara, minuto, dia, mes, hora) => {
    console.log("Agendando uma sessão..")
    cron.schedule(`${minuto} ${hora} ${dia} ${mes} *`, () => {
        console.log("Enviando cronjob")
        io.emit(camara,"OK DEU CERTO")
    });
} 

class SessaoController {
    static async get() {

    }

    static async post(req, res) {
        const { camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador } = req.body;

        try {
            await SessaoRepositoy.inserirDados(camara, tipo, pauta, dia, mes, hora, minuto, descrição, orador)
        } catch (error) {
            return res.send({ error: error })
        }

        agendarSessao(camara, minuto, dia, mes, hora)

        res.send({ sucesso: "sessão inserida" })
    }

    static async put() {

    }

    static async delete() {

    }
}

module.exports = SessaoController