module.exports = {
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || "127.0.0.1",
    pollInterval: 1e3, // 1 second,
    stalledTimeout: 5e3 // 5 seconds
};