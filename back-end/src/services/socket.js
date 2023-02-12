const io = require("socket.io")(3001);

io.on("connection", socket => {
    console.log("Frontend conectado");
    socket.on("disconnect", () => {
        console.log("Frontend desconectado");
    });
});

module.exports = io