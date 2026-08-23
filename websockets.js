const { parseCookie } = require("cookie");
const jwt = require("jsonwebtoken");
const processBatch = require("./utils/processBatch");
const { setAnomaly, getAnomaly } = require("./utils/redisHelper");

const socketAuth = (socket, next) => {
    try {   
        const cookies = parseCookie(socket.handshake.headers.cookie || "");
        const token = cookies.token;

        if (!token) {
            return next(new Error("Authentication error: Token missing"));
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = decoded;
        next();
    } catch (err) {
        console.error("Socket Auth Error:", err.message);
        next(new Error("Authentication error: Invalid token"));
    }
};

const handleSensorBatchStream = (socket) => {
    socket.on("sensor_batch_stream", async (payload) => {
        try {
            const prevAnomaly = await getAnomaly(socket.user.id);
            if (prevAnomalies != null) {
                console.log(prevAnomalies);
                // return;
            }

            if (!payload || typeof payload !== "object") {
                return socket.emit("batch_error", { message: "Payload must be an object." });
            }

            const { motionData, locationData } = payload;

            const result = processBatch(motionData, locationData);
            console.log(result);

            if (result.anomalyCount > 0) {
                await setAnomaly(socket.user.id, result);
                return socket.emit("anomaly_detected", {
                    message: "Anomalies in motion sensor and speed readings have been detected."
                });
            } else {
                return socket.emit("window_acknowledged", { status: "normal" });
            }
        } catch (err) {
            console.error("Batch processing error:", err);
            return socket.emit("batch_error", {
                message: "Error processing sensor batch window."
            });
        }
    });
};

module.exports = (io) => {
    io.use(socketAuth);

    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id} (User: ${socket.user?.id || 'unknown'})`);

        handleSensorBatchStream(socket);

        socket.on("disconnect", (reason) => {
            console.log(`Socket disconnected: ${socket.id} | Reason: ${reason}`);
        });
    });
};
