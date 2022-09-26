import io from "socket.io-client";
import localStorage from "./localStorage";

export default function () {
  const SERVER = import.meta.env.VITE_WEBSOCKET_SERVER_URL;
  const TOKEN = localStorage.get("jwt");
  const socket = io(SERVER, {
    transports: ["websocket"],
    extraHeaders: {
      Authorization: TOKEN,
    },
  });
  return socket;
}
