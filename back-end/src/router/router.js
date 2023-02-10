const httpServer = require("../adapters/httpServer")

const CamaraController = require("../controllers/camara/CamaraController")
const CamaraValidation = require("../validations/Camara.validation")

const router = () => {
    /**httpServer.get("/usuario", usuarioControllerGet)
    httpServer.post("/usuario", usuarioControllerPost)
    httpServer.put("/usuario", usuarioControllerPut)
    httpServer.del("/usuario", usuarioControllerDel)

    httpServer.get("/vereadores", vereadorControllerGet)
    httpServer.post("/vereadores", vereadorControllerPost)
    httpServer.put("/vereadores", vereadorControllerPut)
    httpServer.del("/vereadores", vereadorControllerDel)

    httpServer.get("/sessao", sessaoControllerGet)
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