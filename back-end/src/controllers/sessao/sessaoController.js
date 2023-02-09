const sessaoControllerDel = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const sessaoControllerGet = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const sessaoControllerPost = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const sessaoControllerPut = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

module.exports = sessaoControllerDel
module.exports = sessaoControllerGet
module.exports = sessaoControllerPost
module.exports = sessaoControllerPut