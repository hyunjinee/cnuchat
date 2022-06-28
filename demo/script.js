const socket = io("http://localhost:3000")
const messageContainer = document.querySelector("#message-container")
const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")

console.log(socket)
const name = prompt("닉네임을 입력해주세요.")
appendMessage("참여하셨습니다.")

// socket.emit("new-user", name)

socket.emit("personal-conn")

socket.on("chat-message", (data) => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on("user-connected", (name) => {
  appendMessage(`${name} connected`)
})

socket.on("user-disconnected", (name) => {
  appendMessage(`${name} disconnected`)
})

// socket.on("personal-connection", (a) => {
//   console.log(a)
// })

socket.on("conn", (id) => {
  console.log(id)

  socket.emit("personal-chat", id)
})

socket.on("wait", (message) => {
  console.log("ㄱㄷ")
})

socket.on("personal-connection", (id) => {
  console.log(id, "상대방 id")
})

messageForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit("send-chat-message", message)
  messageInput.value = ""
})

function appendMessage(message) {
  const messageElement = document.createElement("div")
  messageElement.innerText = message
  messageContainer.appendChild(messageElement)
}
