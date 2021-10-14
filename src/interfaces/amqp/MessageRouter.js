module.exports = ({ pubSub, messageController }) => ({
  initiateRoutes: async () => {
    await pubSub.subscribe('sendLogs', messageController.onLog);
  },
});
