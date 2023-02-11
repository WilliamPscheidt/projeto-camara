class UsuarioValidation {
    static validateGetRoute(req, res, next) {
        if(!req.body.nome) {
            return res.send({"erro": "Você precisa informar um nome."})
        }

        next()
    }

    static validatePostRoute(req, res, next) {
        const {nome, funcao, email, telefone, camara} = req.body

        if(!nome, !funcao, !email, !telefone, !camara) {
            return res.send({"erro": "Você precisa informar todos os dados: nome, funcao, email, telefone, camara"})
        }

        next()
    }

    static validatePutRoute(req, res, next) {
        const {antigo_nome, nome, funcao, email, telefone, camara} = req.body

        if(!antigo_nome, !nome, !funcao, !email, !telefone, !camara) {
            return res.send({"erro": "Você precisa informar todos os dados: antigo_nome, nome, funcao, email, telefone, camara"})
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

module.exports = UsuarioValidation