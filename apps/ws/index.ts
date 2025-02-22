// import { client } from "@repo/db/client";
// import { WebSocketServer } from "bun";

// const server = new WebSocketServer({ port: 8081 });

// server.on("connection", async (ws) => {
//     console.log("Client connected");

//     // Example of creating a user in your database
//     await client.user.create({
//         data: {
//             username: Math.random().toString(),
//             password: Math.random().toString()
//         }
//     });

//     ws.on("message", (data) => {
//         ws.send(data); // Echo back received message
//     });
// });
