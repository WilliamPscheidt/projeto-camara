const httpServer = require("./adapters/httpServer")
const database = require('./adapters/databaseServer')

httpServer.start(3000, "* Server Online")
httpServer.get("/", (req, res) => {
    res.send("oi");
})

database.execute(`select * from ${"camaras".toString()}`)
