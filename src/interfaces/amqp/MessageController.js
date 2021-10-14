const fileName = 'MessageController';

module.exports = ({ logger, createLogUsecase }) => ({
  onLog: async (msg) => {
    const callName = `${fileName}.onLog()`;
    logger.info(`${callName} entered, with payload: ${JSON.stringify(msg)}`);
    await createLogUsecase.create(msg)
  },
});
