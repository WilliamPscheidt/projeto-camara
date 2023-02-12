const express = require('express')
const http = require("http")
const helmet = require("helmet");
const upload = require("../services/SalvarFotos")

class HttpServer {
    constructor() {
        this.express = express()
        this.middlewares()
    }

    async middlewares() {
        this.express.use(express.json());
        this.express.use(helmet());
    }

    async use(path, handler) {
        this.express.use(path, handler)
    }

    async get(path, handler) {
        this.express.get(path, handler)
    }

    async post(path, handler) {
        this.express.post(path, handler)
    }

    async postWithImage(path, handler) {
        this.express.post(path, upload.single("avatar"), handler)
    }

    async delete(path, handler) {
        this.express.delete(path, handler)
    }

    async put(path, handler) {
        this.express.put(path, handler)
    }

    async start() {
        this.express.listen(3000, (err) => {
            console.log("Server listening")
        })
    }
}

module.exports = new HttpServer