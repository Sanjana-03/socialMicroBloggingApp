let io;

module.exports = {
    init: httpServer => {
        io = require("socket.io")(httpServer, {
            cors: {
                origin: "http://localhost:3000", // Allow requests from React frontend
                methods: ["GET", "POST"],       // Allowed HTTP methods
                credentials: true               // Allow cookies and authentication headers
            }
        });
        return io;
    },
    getIO: () => {
        if(!io){
            throw new Error('Socket.io not initialized!');
        }
        return io;
    }
};