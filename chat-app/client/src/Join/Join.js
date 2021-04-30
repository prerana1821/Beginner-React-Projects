import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRoom } from "../RoomProvider/RoomProvider";

export const Join = () => {
  // const { state, dispatch } = useRoom();

  // console.log(state);

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <h2>Join</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type='submit'>Join</button>
      </Link>
    </div>
  );
};
