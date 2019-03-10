const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {
      type: 'console'
    },
    logfiles: {
      type: 'file',
      filename: './logs/logfiles',
      maxLogSize: 1024*10*10,
      backups: 3,
      pattern: "yyyy_MM_dd.log",
      alwaysIncludePattern: true,
    }
  },
  categories: {
    default: {
      appenders: ['out', 'logfiles'],
      level: 'info'
    }
  }
});

const logger = log4js.getLogger('logfiles');
// const loggerMiddleware = log4js.connectLogger(logger, { level: 'warn' });

module.exports = {
  logger
};

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Comté.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');
