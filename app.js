const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
require('dotenv').config()

const app = express()
const server = http.createServer(app)
const io = socketio(server)

//Setting static forlder
app.use(express.static(path.join(__dirname,'public')))

//Run when client connects
io.on('connection', socket => {
    //welcome user
    socket.emit('message','Welcome to ChatCord!' )

    //Broadcast when a user connects
    socket.broadcast.emit('message', 'A user has joined the chat')

//Run when client disconnects
     socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat')
     })
})





const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is running at ${PORT}`))