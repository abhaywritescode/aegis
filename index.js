const express = require("express");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
// const { createClient } = require("redis");
const { createAdapter } = require("@socket.io/redis-adapter");

const app = express();
app.set("trust proxy", true);

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// if (process.env.REDIS_URL) {
//     const pubClient = createClient({ url: process.env.REDIS_URL });
//     const subClient = pubClient.duplicate();
    
//     Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
//         io.adapter(createAdapter(pubClient, subClient));
//     });
// }

app.use(express.json());
app.use(cookieParser());

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/auth-status", require("./routes/auth-status"));
app.use("/account", require("./routes/account"));
app.use("/profile", require("./routes/profile"));
app.use("/contacts", require("./routes/contacts"));
app.use("/devices", require("./routes/devices"));

require("./websockets")(io);

module.exports = server;
