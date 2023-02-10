const httpServer = require("./adapters/httpServer")
httpServer.start()

const router = require('./router/router')

router()