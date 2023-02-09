const httpServer = require("../adapters/httpServer")

const usuarioControllerGet = require("../controllers/usuario/usuarioController")
const usuarioControllerPost = require("../controllers/usuario/usuarioController")
const usuarioControllerPut = require("../controllers/usuario/usuarioController")
const usuarioControllerDel = require("../controllers/usuario/usuarioController")

const vereadorControllerGet = require("../controllers/vereador/vereadorController")
const vereadorControllerPost = require("../controllers/vereador/vereadorController")
const vereadorControllerPut = require("../controllers/vereador/vereadorController")
const vereadorControllerDel = require("../controllers/vereador/vereadorController")

const sessaoControllerGet = require("../controllers/sessao/sessaoController")
const sessaoControllerPost = require("../controllers/sessao/sessaoController")
const sessaoControllerPut = require("../controllers/sessao/sessaoController")
const sessaoControllerDel = require("../controllers/sessao/sessaoController")

const camaraControllerGet = require("../controllers/camara/camaraController")
const camaraControllerPost = require("../controllers/camara/camaraController")
const camaraControllerPut = require("../controllers/camara/camaraController")
const camaraControllerDel = require("../controllers/camara/camaraController")

const router = () => {
    httpServer.get("/usuario", usuarioControllerGet)
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
    httpServer.del("/sessao", sessaoControllerDel)

    httpServer.get("/camara", camaraControllerGet)
    httpServer.post("/camara", camaraControllerPost)
    httpServer.put("/camara", camaraControllerPut)
    httpServer.del("/camara", camaraControllerDel)
}

module.exports = router