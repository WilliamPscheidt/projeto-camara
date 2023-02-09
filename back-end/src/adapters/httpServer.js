const httpServer = () => {
    const express = require("express")
    const app = express()

    const start = (port, message) => {
        app.listen(port, () => {
            console.debug(message)
        })
        middleware()
    }

    const middleware = () => {
        app.use(express.json())
    }

    const use = (path, handler) => {
        app.use(path, handler)
    }

    const get = (path, handler) => {
        app.get(path, handler)
    }

    const post = (path, handler) => {
        app.post(path, handler)
    }

    const put = (path, handler) => {
        app.put(path, handler)
    }

    const del = (path, handler) => {
        app.delete(path, handler)
    }

    return {
        start,
        use,
        get,
        post,
        put,
        del
    }
}

module.exports = httpServer()