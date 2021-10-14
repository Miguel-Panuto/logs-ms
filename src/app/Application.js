const container = require('src/container');
const startTables = require('src/infra/db/models/Tables');

module.exports = class Application {
  constructor() {
    this.container = container;
  }

  async start() {
    const { server, amqpClient, amqpChannels, messageRouter, db } =
      this.container.cradle;

    await startTables(db);
    await server.start();
    await amqpClient.start();
    await amqpChannels.createExchanges();
    await messageRouter.initiateRoutes();
  }
};
