const jsonwebtoken = require('jsonwebtoken');
const secret = 'slark';

function signToken(userPayload) {
  return jsonwebtoken.sign(userPayload, secret, { expiresIn: 60 * 60 });
  // userPayload = {
  //   "id": "cjspqkuib00130601ue77v6bc",
  //   "email": "alice@prisma.io",
  //   "iat": 1551432496,
  //   "exp": 1551436096
  // }
}

function verifyAndDecodeToken(context) {
  const authorization = context.request.get('Authorization');
  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    return jsonwebtoken.verify(token, secret);
  }
}

module.exports = {
  signToken,
  verifyAndDecodeToken,
};