// src/socket.js
import { io } from "socket.io-client";

// Replace with your backend URL
const SOCKET_URL = "http://localhost:4000";

// Create socket instance
const socket = io(SOCKET_URL, {
    withCredentials: true,
});

export default socket;
