const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.redirect(__dirname + '/public/index.html')
})


io.on('connection', (socket) => {
    socket.on('stream', (image) => {
        socket.broadcast.emit('stream', image)
    })
    socket.on('direccion', (direc)=>{
        console.log(direc)
    })
    socket.on('mic', (mic) => {
        console.log(mic)
    })
})

http.listen(3000, '0.0.0.0')