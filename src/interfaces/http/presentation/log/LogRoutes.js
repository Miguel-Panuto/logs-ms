module.exports = ({ logController }) => [
  {
    method: 'get',
    path: '/log',
    handler: logController.findLogs,
  },
];
