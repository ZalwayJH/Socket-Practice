import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io(
  "http://ec2-35-176-194-18.eu-west-2.compute.amazonaws.com:3000/"
);
const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

/*

 logic for openning the box

if ( gameData.peeker === myId) {
  peakButton.hidden = false
  peakButton.onClick(() => { 
    BoxOpenned  : true 
    *** we send this question to the server and await the answer --> line 37
  io.emit("Do i have the carrot?", (answer) => {
  gameData.hasCarrot = answer 
  })

 ***server side

 socket.on("Do i have the carrot?", (answer) => {
  socket.emit(gameData.hasCarrotId === socket.id, () => {
     const currentTime = Date.now()
     const tus = Date.now() + 30000
      socket.to(gameData.roomId).emit("timer started", {Tus: tus}
  }) --> line 29

)
 })
  }

  *** client side
  socket.on("timer started", ({tus}) => {
    gameData.timerStarted = true
    gameData.tus = tus
    startTimer()
  } )


  */
