const express = require('express')
const Taaa = require('../model/Taaa')
const router = express.Router()

router.get('/add', (req, res) => {
    let aaa = new Taaa()
    let params = {
        a: '3',
        b: 3,
        c: 12.3566,
        d: '2017-01-11 11:21:54'
    }
    aaa.add(params).then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        console.log(err)
    })
})

router.get('/list', (req, res) => {
    let aaa = new Taaa()
    aaa.list().then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        console.log(err)
    })
})

router.get('/get/:id', (req, res) => {
    let aaa = new Taaa()
    aaa.load(req.params.id).then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        console.log(err)
    })
})

router.get('/update', (req, res) => {
    let aaa = new Taaa()
    aaa.load('2').then(data => {
        aaa.data.d = '2011-01-01 12:23:34'
        aaa.data.e = '2019-01-02 12:23:34'
        return aaa.update()
    }).then(data => {
        res.send('success')
    }).catch(err => {
        console.log(err)
    })
})

router.get('/delete', (req, res) => {
    let aaa = new Taaa()
    aaa.delete('1').then(data => {
        res.send(JSON.stringify(data))
    }).catch(err => {
        console.log(err)
    })
})



module.exports = router