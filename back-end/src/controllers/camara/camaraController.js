const database = require("../../adapters/databaseServer")

const camaraControllerDel = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const camaraControllerGet = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

const camaraControllerPost = async (req, res) => {
    const {nome, presidente, tecnico, telefone, email, endereco, cnpj, logo} = req.body

    try {
        await database.execute("INSERT INTO camaras (nome, presidente, técnico, telefone, email, endereço, cnpj, logo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [nome, presidente, tecnico, telefone, email, endereco, cnpj, logo])
        return res.send({success: "camara criada"})
    } catch (error) {
        return res.send({err: "erro no request"})
    }
}



const camaraControllerPut = (req, res) => {
    const {nome} = req.body

    res.send({nome: nome})
}

module.exports = camaraControllerPost