class VereadorValidation {
    static validateGetRoute(req, res, next) {
        if(!req.body.nome) {
            return res.send({"erro": "Você precisa informar um nome."})
        }

        next()
    }

    static validatePostRoute(req, res, next) {
        const {nome, partido, camara} = req.query

        if(!nome, !partido, !camara) {
            return res.send({"erro": "Você precisa informar todos os dados: nome, partido, camara"})
        }

        next()
    }

    static validatePutRoute(req, res, next) {
        const {nome_atual, nome, partido, camara} = req.body

        if(!nome_atual, !nome, !partido, !camara) {
            return res.send({"erro": "Você precisa informar todos os dados: nome_atual, nome, partido, camara"})
        }

        next()
    }

    static validateDeleteRoute(req, res, next) {
        const {nome} = req.body

        if(!nome) {
            return res.send({"erro": "Você precisa informar todos os dados: nome"})
        }

        next()
    }
}

module.exports = VereadorValidation