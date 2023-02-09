const httpServer = require("./adapters/httpServer")
const router = require('./router/router')
httpServer.start(3000, "* Server Online")

router()