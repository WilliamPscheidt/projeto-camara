class CamaraValidation {
    static validateGetRoute(req, res, next) {
        if(!req.body.nome_camara) {
            return res.send({"erro": "Você precisa informar um nome de câmara."})
        }

        next()
    }

    static validatePostRoute(req, res, next) {
        const {nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        if(!nome, !presidente, !tecnico, !telefone, !email, !endereco, !cnpj, !logo) {
            return res.send({"erro": "Você precisa informar todos os dados: nome, presidente, tecnico, telefone, email, endereco, cnpj, logo"})
        }

        next()
    }

    static validatePutRoute(req, res, next) {
        const {antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

        if(!antigo_nome, !nome, !presidente, !tecnico, !telefone, !email, !endereco, !cnpj, !logo) {
            return res.send({"erro": "Você precisa informar todos os dados: antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo"})
        }

        next()
    }

    static validateDeleteRoute(req, res, next) {
        const {nome_camara} = req.body

        if(!nome_camara) {
            return res.send({"erro": "Você precisa informar todos os dados: antigo_nome, nome, presidente, tecnico, telefone, email, endereco, cnpj, logo"})
        }

        next()
    }
}

module.exports = CamaraValidation