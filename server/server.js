import { WebSocketServer } from "ws";
import dgram from "dgram";

const PORT_UDP = 41234;
const PORT_WS = 3001;

const wss = new WebSocketServer({ port: PORT_WS });
const udpSocket = dgram.createSocket("udp4");

let lastDirection = "stop";

// Ao receber mensagem UDP
udpSocket.on("message", (msg, rinfo) => {
  const direction = msg.toString().trim();
  lastDirection = direction;
  console.log(`UDP recebido: ${direction} de ${rinfo.address}:${rinfo.port}`);

  // Envia a direção para todos os clientes WebSocket conectados
  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(direction);
    }
  });
});

udpSocket.bind(PORT_UDP, "0.0.0.0", () => {
  console.log(`Servidor UDP escutando na porta ${PORT_UDP}`);
});

wss.on("connection", (ws) => {
  console.log("Cliente WebSocket conectado");
  ws.send(lastDirection); // Envia a direção atual imediatamente
});

console.log(`Servidor WebSocket escutando na porta ${PORT_WS}`);
