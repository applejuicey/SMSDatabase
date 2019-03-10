const { logger } = require('../utils/log4js');

const log = async (resolve, parent, args, context, info) => {
  logger.info('进入日志记录中间件!');
  try {
    const result = await resolve(parent, args, context, info);
    logger.info(result);
    logger.info('离开日志记录中间件(success)!');
    return result;
  } catch (error) {
    logger.error(error);
    logger.info('离开日志记录中间件(error)!');
    return error;
  }
};

module.exports = {
  log
};