import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

let socket;

export const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const query = new URLSearchParams(useLocation().search);

  var connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const ENDPOINT = "http://localhost:3000/";

  useEffect(() => {
    const name = query.get("name");
    const room = query.get("room");
    console.log(name);
    console.log(room);
    // socket = io(ENDPOINT, connectionOptions);
    let socket = io.connect(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    console.log(socket);
    setName(name);
    setRoom(room);
  }, [name, room, ENDPOINT]);

  return (
    <div>
      <h2>Chat</h2>
    </div>
  );
};
