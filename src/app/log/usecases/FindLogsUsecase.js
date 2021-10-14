const fileName = 'FindLogsUsecase';

module.exports = ({ logger, logsRepository }) => ({
  find: (col, wh) => {
    const callName = `${fileName}.find()`;
    const c = col ? col.split(',') : ['*'];
    const w = wh ? wh.split(',') : [];
    logger.info(
      `${callName} entered with: ${JSON.stringify(c)} \n${JSON.stringify(w)}`
    );
    const cols = [];
    c.forEach((col) => {
      if (cols.findIndex((column) => column === col) < 0) cols.push(col);
    });
    const wheres = [];
    w.forEach((where) => {
      const setences = where.split(';');
      wheres.push(
        `${setences[0]} LIKE ${
          setences[1] === 'equal'
            ? `'${setences[2]}'`
            : setences[1] === 'starsWith'
            ? `'${setences[2]}%'`
            : setences[1] === 'endsWith'
            ? `'%${setences[2]}'`
            : `'%${setences[2]}%'`
        }`
      );
    });
    return logsRepository.findLog(cols, wheres);
  },
});
