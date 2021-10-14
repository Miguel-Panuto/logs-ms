module.exports = (log) => {
  const obj = {
    message: log.message || null,
    level: log.level || null,
    timestamp: log.timestamp || new Date(),
    service_name: log.service_name || null,
  };
  return obj;
};
