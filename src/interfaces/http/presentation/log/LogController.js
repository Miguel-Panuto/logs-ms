const fileName = 'LogController';

module.exports = ({
  logger,
  findLogsUsecase,
}) => ({
  findLogs: async (req, res) => {
    const callName = `${fileName}.fingLogs()`;
    const { c,  } = req.query;
    try {
      const users = await findLogsUsecase.find(q);
      const status = users.length <= 0 ? 204 : 200;
      return res.status(status).json(users);
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err}`);
      return res.status(403).json({ error: 'a error has been ocoured' });
    }
  },
});
