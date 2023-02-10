const httpServer = require("../adapters/httpServer")

const CamaraController = require("../controllers/camara/camaraController")

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

    httpServer.get("/camara", CamaraController.get)
    httpServer.post("/camara", CamaraController.post)
    httpServer.put("/camara", CamaraController.put)
    httpServer.delete("/camara", CamaraController.del)
}

module.exports = router