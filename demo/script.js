const socket = io("http://localhost:3000")
const messageContainer = document.querySelector("#message-container")
const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")

appendMessage("참여하셨습니다.")

let room

socket.emit("random-join")
socket.on("joined-room", (roomId) => {
  console.log("roomId", roomId)

  room = roomId
})

socket.on("receive-message", (message) => {
  console.log(message)
  appendMessage(message)
})

messageForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  // socket.emit("send-chat-message", message)
  socket.emit("send-message", room, message)
  messageInput.value = ""
})

function appendMessage(message) {
  const messageElement = document.createElement("div")
  messageElement.innerText = message
  messageContainer.appendChild(messageElement)
}

// socket.emit("personal-conn")

// socket.on("chat-message", (data) => {
//   appendMessage(`${data.name}: ${data.message}`)
// })

// socket.on("user-connected", (name) => {
//   appendMessage(`${name} connected`)
// })

// socket.on("user-disconnected", (name) => {
//   appendMessage(`${name} disconnected`)
// })

// socket.on("personal-connection", (a) => {
//   console.log(a)
// })

// socket.on("conn", (id) => {
//   console.log(id)

//   socket.emit("personal-chat", id)
// })

// socket.on("wait", (message) => {
//   console.log("ㄱㄷ")
// })

// socket.on("personal-connection", (id) => {
//   console.log(id, "상대방 id")
// })
