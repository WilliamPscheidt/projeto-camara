const httpServer = require("../adapters/httpServer")

const CamaraController = require("../controllers/CamaraController")
const CamaraValidation = require("../validations/Camara.validation")

const VereadorController = require("../controllers/vereadorController")
const VereadorValidation = require("../validations/Vereador.validation")

const router = () => {
    /**httpServer.get("/usuario", usuarioControllerGet)
    httpServer.post("/usuario", usuarioControllerPost)
    httpServer.put("/usuario", usuarioControllerPut)
    httpServer.del("/usuario", usuarioControllerDel)**/

    httpServer.get("/vereador", VereadorValidation.validateGetRoute)
    httpServer.get("/vereador", VereadorController.get)
    httpServer.post("/vereador", VereadorValidation.validatePostRoute)
    httpServer.post("/vereador", VereadorController.post)
    httpServer.put("/vereador", VereadorValidation.validatePutRoute)
    httpServer.put("/vereador", VereadorController.put)
    httpServer.delete("/vereador", VereadorValidation.validateDeleteRoute)
    httpServer.delete("/vereador", VereadorController.del)

    /**httpServer.get("/sessao", sessaoControllerGet)
    httpServer.post("/sessao", sessaoControllerPost)
    httpServer.put("/sessao", sessaoControllerPut)
    httpServer.del("/sessao", sessaoControllerDel)**/

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