const fileName = 'LogsRepository';

module.exports = ({ logger, db }) => ({
  create: async (log) => {
    const callName = `${fileName}.createLog()`;
    logger.info(`${callName} entered, with log: ${JSON.stringify(log)}`);
    await db.insert(log).into('logs');
  },

  findLog: (cols, wheres) => {
    const callName = `${fileName}.findLog()`;
    logger.info(
      `${callName} entered, with cols: ${JSON.stringify(
        cols
      )} and wheres: ${wheres}`
    );
    let rawWhere = '';
    wheres.forEach((where, index) => {
      rawWhere += index <= 0 ? `${where}` : ` AND ${where}`;
    });
    console.log(db.select(cols).from('logs').whereRaw(rawWhere).toQuery());
    return db.select(cols).from('logs').whereRaw(rawWhere);
  },
});
