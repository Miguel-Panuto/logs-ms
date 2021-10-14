const fileName = 'LogController';

module.exports = ({
  logger,
  findLogsUsecase,
}) => ({
  findLogs: async (req, res) => {
    const callName = `${fileName}.fingLogs()`;
    const { c, w } = req.query;
    try {
      const logs = await findLogsUsecase.find(c, w);
      const status = logs.length <= 0 ? 204 : 200;
      return res.status(status).json(logs);
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },
});
