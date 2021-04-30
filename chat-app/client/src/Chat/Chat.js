import React from "react";
import { useState, useEffect } from "react";
// import { useRoom } from "../RoomProvider/RoomProvider";
import { useLocation } from "react-router-dom";

import io from "socket.io-client";

let socket;

export const Chat = () => {
  // const { state } = useRoom();

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const query = new URLSearchParams(useLocation().search);

  // var connectionOptions = {
  //   "force new connection": true,
  //   reconnectionAttempts: "Infinity",
  //   timeout: 10000,
  //
  // };

  // console.log(state);
  const ENDPOINT = "https://server.prerananawar1.repl.co/";

  useEffect(() => {
    const name = query.get("name");
    const room = query.get("room");
    socket = io.connect(ENDPOINT, { transports: ["websocket"] });
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
