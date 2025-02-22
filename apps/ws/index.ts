import { client } from "@repo/db/client";
import { WebSocketServer } from "ws";

const server = new WebSocketServer({port:8081})

server.on('connection',async(ws:WebSocket) => {
    console.log("Client connected");

    await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    ws.on('message',(data) => {
        ws.send(data)
    })
})