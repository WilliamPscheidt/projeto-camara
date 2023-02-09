const httpServer = require("./adapters/httpServer")

httpServer.start(3000, "* Server Online")
httpServer.get("/", (req, res) => {
    res.send("oi");
})