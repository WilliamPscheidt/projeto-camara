const vereadorControllerDel = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const vereadorControllerGet = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const vereadorControllerPost = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const vereadorControllerPut = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

module.exports = vereadorControllerDel
module.exports = vereadorControllerGet
module.exports = vereadorControllerPost
module.exports = vereadorControllerPut