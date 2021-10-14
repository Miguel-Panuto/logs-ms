module.exports = (log) => {
  const obj = {
    message: log.message || null,
    level: log.level || null,
    timestamp: log.timestamp || new Date(),
    serviceName: log.serviceName || null,
  };
  return obj;
};
