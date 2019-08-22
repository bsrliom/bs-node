const Db = require('./Db')
class Table extends Db {
    constructor() {
        super();
        this.table = '';
        this.primaryKey = '';
        this.data = {}
    }

    list() {
        let sql = `SELECT * FROM ${this.table}`
        return this.query(sql)
    }

    load(id) {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM ${this.table} WHERE ${this.primaryKey} = "${id}"`;
            this.query(sql).then(data => {
                if (data.length) {
                    this.data = data[0]
                    resolve(data[0])
                } else {
                    resolve({})
                }
            }, err => {
                reject(err)
            })
        })
    }

    add(data) {
        console.log(data)
        let fields = Object.keys(data).join(','),
            values = Object.values(data).join('","')
        let sql = `INSERT INTO ${this.table} ( ${fields} ) VALUES( "${values}" )`;
        return this.query(sql)
    }

    update() {
        let set = []
        for (let x in this.data) {
            if (x !== this.primaryKey) {
                set.push(`${x} = "${this.data[x]}"`)
            }
        }
        let sql = `UPDATE ${this.table} SET ${set.join(',')}  WHERE ${this.primaryKey} = "${this.data[this.primaryKey]}"`;
        return this.query(sql)
    }

    delete(id) {
        let sql = `DELETE FROM ${this.table} WHERE ${this.primaryKey} = "${id}"`;
        return this.query(sql)
    }
}

module.exports = Table