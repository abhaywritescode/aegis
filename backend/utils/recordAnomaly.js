const { createClient } = require("redis");
const client = createClient();

client.on("error", err => console.error("Redis Error:", err));

client.connect()
    .then(() => { console.log("Successfully connected to Redis.") })
    .catch((err) => { console.error("Error in connecting to Redis:", err) });

module.export = async (userId, alertPayload) => {
    await client.set(
        `anomalies:${userId}`, JSON.stringify(alertPayload)
    );
};