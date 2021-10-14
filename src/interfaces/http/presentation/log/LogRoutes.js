module.exports = ({ logController }) => [
  {
    method: 'get',
    path: '/logs',
    handler: logController.findLogs,
  },
];
