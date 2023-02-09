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
        return app.use(express.json())
    }

    const use = (path, handler) => {
        return app.use(path, handler)
    }

    const get = (path, handler) => {
        return app.get(path, handler)
    }

    const post = (path, handler) => {
        return app.post(path, handler)
    }

    const put = (path, handler) => {
        return app.put(path, handler)
    }

    const del = (path, handler) => {
        return app.delete(path, handler)
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