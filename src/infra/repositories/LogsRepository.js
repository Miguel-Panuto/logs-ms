const fileName = 'LogsRepository';

module.exports = ({logger, db}) => ({
  createLog: async (log) => {
    const callName = `${fileName}.createLog()`;
    logger.info(`${callName} entered, with log: ${JSON.stringify(log)}`)
    await db.insert(log).into('logs');
  },

  findLog: async () => {},
});
