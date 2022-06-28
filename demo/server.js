const io = require("socket.io")(3000, { cors: { origins: "*" } })
const { v4: uuidv4 } = require("uuid")
console.log("server started at port 3000")

const users = {}
const rooms = {}

io.on("connection", (socket) => {
  socket.on("join-room", (roomId) => {
    socket.join(roomId)
  })

  socket.on("send-message", (roomId, message) => {
    socket.to(roomId).emit("receive-message", message)
  })

  socket.on("random-join", () => {
    for (let room in rooms) {
      if (rooms[room].length === 1) {
        rooms[room].push(socket.id)
        socket.join(room)
        socket.emit("joined-room", room)

        // io.to(rooms[room][0]).emit("personal-connection", room)
        // io.to(rooms[room][1]).emit("personal-connection", room)
        return
      }
    }

    // const roomId = Object.keys(rooms).length
    // rooms[roomId] = [socket.id]
    const roomId = uuidv4()
    rooms[roomId] = [socket.id]

    socket.join(roomId)
    socket.emit("joined-room", roomId)
  })

  // socket.on("new-user", (name) => {
  //   users[socket.id] = name
  //   console.log(users)
  //   socket.broadcast.emit("user-connected", name)
  // })

  // socket.on("send-chat-message", (message) => {
  //   socket.broadcast.emit("chat-message", {
  //     message: message,
  //     name: users[socket.id],
  //   })
  // })

  // io.to(socket.id).emit("conn", socket.id)

  // socket.on("personal-chat", (id) => {
  //   console.log(id, "아이디에요")

  //   for (let room in rooms) {
  //     if (rooms[room].length === 1) {
  //       rooms[room].push(id)

  //       console.log(rooms[room][0], "사용자1")
  //       console.log(rooms[room][1], "사용자2")
  //       // io.to(rooms[room][0]).emit("personal-connection", rooms[room][1])
  //       // io.to(rooms[room][1]).emit("personal-connection", rooms[room][0])

  //       // 방 번호를 보내준다.
  //       io.to(rooms[room][0]).emit("personal-connection", room)
  //       io.to(rooms[room][1]).emit("personal-connection", room)
  //       return
  //     }
  //   }

  //   const roomCount = Object.keys(rooms).length
  //   const roomId = roomCount

  //   rooms[roomId] = [socket.id]
  //   io.to(socket.id).emit("wait")
  // 개인 1대1 연결을 원하는 사용자가 들어오면 방을 순회하면서 방의 인원수가 하나인 방을 리턴?
  // const roomCount = Object.keys(rooms).length
  // if (roomCount === 0) {
  //   rooms[0] = [socket.id]
  //   return
  // }
  // // 방찾기
  // for (let room in rooms) {
  //   if (room.length === 1) {
  //     room.push(socket.id)
  //     io.to(room[0]).emit("personal-connection", room[1])
  //     io.to(room[1]).emit("personal-connection", room[0])
  //     return
  //   }
  // }
  // // 방생성
  // const roomId = Object.keys(rooms).length
  // rooms[roomId] = [socket.id]
  // if (id in rooms) {
  //   rooms[id] = socket.id
  // }
  // })

  // socket.on("personal-conn", () => {
  //   io.to(socket.id).emit("conn", socket.id)
  // })

  socket.on("disconnect", () => {
    // socket.broadcast.emit("user-disconnected", users[socket.id])
    // delete users[socket.id]

    for (let room in rooms) {
      if (rooms[room].includes(socket.id)) {
        delete rooms[room]
      }
    }
  })
})
