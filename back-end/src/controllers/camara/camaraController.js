const camaraControllerDel = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const camaraControllerGet = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const camaraControllerPost = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}



const camaraControllerPut = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

module.exports = camaraControllerDel
module.exports = camaraControllerGet
module.exports = camaraControllerPost
module.exports = camaraControllerPut