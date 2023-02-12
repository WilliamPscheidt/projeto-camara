const httpServer = require("../adapters/httpServer")

const CamaraController = require("../controllers/CamaraController")
const CamaraValidation = require("../validations/Camara.validation")

const VereadorController = require("../controllers/VereadorController")
const VereadorValidation = require("../validations/Vereador.validation")

const UsuarioController = require("../controllers/UsuarioController")
const UsuarioValidation = require("../validations/Usuário.validation")

const SessaoController = require("../controllers/SessaoController")

const router = () => {
    httpServer.get("/usuario", UsuarioValidation.validateGetRoute)
    httpServer.get("/usuario", UsuarioController.get)
    httpServer.post("/usuario", UsuarioValidation.validatePostRoute)
    httpServer.post("/usuario", UsuarioController.post)
    httpServer.put("/usuario", UsuarioValidation.validatePutRoute)
    httpServer.put("/usuario", UsuarioController.put)
    httpServer.delete("/usuario", UsuarioValidation.validateDeleteRoute)
    httpServer.delete("/usuario", UsuarioController.del)

    httpServer.get("/vereador", VereadorValidation.validateGetRoute)
    httpServer.get("/vereador", VereadorController.get)
    httpServer.post("/vereador", VereadorValidation.validatePostRoute)
    httpServer.post("/vereador", VereadorController.post)
    httpServer.put("/vereador", VereadorValidation.validatePutRoute)
    httpServer.put("/vereador", VereadorController.put)
    httpServer.delete("/vereador", VereadorValidation.validateDeleteRoute)
    httpServer.delete("/vereador", VereadorController.del)

    //httpServer.get("/sessao", sessaoControllerGet)
    httpServer.post("/sessao", SessaoController.post)
    //httpServer.put("/sessao", sessaoControllerPut)
    //httpServer.del("/sessao", sessaoControllerDel)

    httpServer.get("/camara", CamaraValidation.validateGetRoute)
    httpServer.get("/camara", CamaraController.get)
    httpServer.post("/camara", CamaraValidation.validatePostRoute)
    httpServer.post("/camara", CamaraController.post)
    httpServer.put("/camara", CamaraValidation.validatePutRoute)
    httpServer.put("/camara", CamaraController.put)
    httpServer.delete("/camara", CamaraValidation.validateDeleteRoute)
    httpServer.delete("/camara", CamaraController.del)
}

module.exports = router