const mysql = require("mysql2")

class DatabaseServer {
    constructor() {
        this.pool = mysql.createPool({
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
        this.pool.getConnection((error, success) => {
            if(error){ console.log("[-] Mysql connection error"); process.exit(1);} else {
                console.log("[+] Mysql online")
            }
        })
    }

    async query(sql, params) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            })
        })
    }

    async close() {
        return new Promise((resolve, reject) => {
            this.pool.end((error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = new DatabaseServer;