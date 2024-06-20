import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import "./Main.css";
import socket from "../socket";
function Main() {
  const name = prompt("Enter your name");
  console.log(name);
  useEffect(() => {
    // Handle socket connection

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    // Cleanup on component unmount
    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
  return (
    <div
      className="bg-white flex flex-col min-h-screen"
      style={{ width: "84%" }}
    >
      <Navbar />
      <div className="flex-grow bg-blue-50" style={{ height: "100%" }}>
        <div
          className="flex-grow bg-blue-50 text-black"
          style={{ height: "90%" }}
        >
          <div className="message left">Hi how are you</div>
          <div className="message right">i am fine and you</div>
        </div>
        <form action="" style={{ height: "10%" }}>
          <div className="">
            <input
              type="text"
              placeholder="Enter your message..."
              className="p-2 w-[92%] m-2 rounded-md text-xl bg-blue-200 border-2 border-black text-black font-semibold "
            />
            <button
              className="m-0 p-3 w-[6%] bg-blue-700 hover:bg-blue-800"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
