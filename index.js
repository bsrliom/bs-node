const express = require('express')
const app = express()
const router_aaa = require('./routers/aaa')

app.use('/aaa', router_aaa)
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))