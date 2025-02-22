import { client } from "@repo/db/client";


Bun.serve({
  port: 8081,

  fetch(req, server) {
    // Upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return; // Do not return a Response
    }
    return new Response("Upgrade failed", { status: 500 });
  },

  websocket: {
    message(ws, message) {
      client.user.create({
        data: {
          username: Math.random().toString(),
          password: Math.random().toString(),
        },
      });

      ws.send(message);
    },
  },
});
