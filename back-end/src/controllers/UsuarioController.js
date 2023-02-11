const usuarioControllerDel = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const usuarioControllerGet = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const usuarioControllerPost = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}



const usuarioControllerPut = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

module.exports = usuarioControllerDel
module.exports = usuarioControllerGet
module.exports = usuarioControllerPost
module.exports = usuarioControllerPut