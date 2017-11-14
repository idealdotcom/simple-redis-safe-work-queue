module.exports = {
    port: 6379,
    host: "127.0.0.1",
    maxConcurrency: 10,
    popTimeout: 3, // 3 seconds
    maxRetries: 10,
    stalledTimeout: 5e3, // 5 seconds
    runTimeoutWatchdog: true,
    runStalledWatchdog: true,
    stall: false,
    autoListen: true
};
