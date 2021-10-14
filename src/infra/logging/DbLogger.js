const Transport = require('winston-transport');
const knex = require('knex');
const createTables = require('src/infra/db/models/Tables');
const config = require('config/configLoader');

module.exports = class DbLogger extends Transport {
  constructor(opts) {
    super(opts);
    this.serviceName = config.serviceName;
  }

  async log(info, callBack) {
    const messageToSend = {
      message: info.message || null,
      level: info.level || null,
      timestamp: new Date(),
      service_name: this.serviceName || null,
    };
    const conn = knex(config.db);
    await createTables(conn).then(async () => {
      await conn.insert(messageToSend).into('logs');
    });

    callBack();
  }
};
