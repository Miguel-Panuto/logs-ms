const makeLog = require('src/app/log/entities/LogEntity');

const fileName = 'CreateLogUsecase';

module.exports = ({ logger, logsRepository }) => ({
  create: async (log) => {
    const callName = `${fileName}.create()`;
    logger.info(`${callName} entered with log: ${JSON.stringify(log)}`);
    const createdLog = makeLog(log);
    await logsRepository.create(createdLog);
  },
});
