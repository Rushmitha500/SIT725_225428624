const socket = io();

socket.on("temperature", (data) => {
  document.getElementById("temperature").innerText = data + "°C";
  console.log("Temperature received:", data);
});