const mysql = require('mysql');
const config = require('../config')

class Db {
    constructor() {
        this.connection = mysql.createConnection(config.db);
        this.connection.connect();
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            console.log(sql)
            this.connection.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            });
        })
    }
}

module.exports = Db