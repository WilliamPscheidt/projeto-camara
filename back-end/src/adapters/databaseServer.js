const database = () => {
    const mysql = require("mysql2")

    const connect = () => {
        return mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'camaras',
            waitForConnections: true,
            connectionLimit: 100,
            maxIdle: 10,
            idleTimeout: 2000,
            queueLimit: 5
        })
    }

    const execute = (query) => {
        connect().query(query, function (err, rows, fields){
            if (err) {return err}
            return rows
        })
    }


    return {
        execute
    }
}

module.exports = database()