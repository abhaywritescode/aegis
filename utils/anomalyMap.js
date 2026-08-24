const anomalyMap = new Map();

const setAnomaly = (userId, alertPayload) => {
    anomalyMap.set(userId, alertPayload);
};

const getAnomaly = (userId) => {
    return anomalyMap.get(userId);
};

const removeAnomaly = (userId) => {
    anomalyMap.delete(userId);
};

module.exports = { setAnomaly, getAnomaly, removeAnomaly };