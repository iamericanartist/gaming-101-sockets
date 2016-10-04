"use strict"

const express = require("express")
const {server} = require("http")
const mongoose = require("mongoose")
const socketio = require("socket.io")

const app = express()
const server = server(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000
const MONGODB_URL =  process.env.MONGODB_URL || "mongodb://localhost:27017/ticktacktoe"

app.set("view engine", "pug")

app.use(express.static("public"))

app.get("/", (req, res) => res.render("index"))

mongoose.connect(MONGODB_URL, () => {
  server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
})