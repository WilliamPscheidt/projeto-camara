const io = require("./socket")
const cron = require("node-cron");
const SessaoRepositoy = require("../repositories/Sessoes.repositoy")

class AgendarSessoes {
    static cronjob(camara, minuto, dia, mes, hora) {
        console.log("Agendando uma sessão..")
        cron.schedule(`${minuto} ${hora} ${dia} ${mes} *`, async () => {
            const resultado = await SessaoRepositoy.buscarDadosSocket(camara, dia, mes, hora, minuto)
            io.emit(camara, resultado)
        });
    }
}

module.exports = AgendarSessoes