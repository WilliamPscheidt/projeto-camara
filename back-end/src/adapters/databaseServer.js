const database = () => {
    const mysql = require("mysql2/promise")

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

    const execute = async (query, data) => {
        await connect().query(query, data, function (err, rows, fields) {
            if (err) {console.log(err)}
            console.log(rows)
        })
    }


    return {
        execute
    }
}

module.exports = database()