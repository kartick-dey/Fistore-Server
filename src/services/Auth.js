const JWT = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const JWT_OPTS = {
    issuer: 'F!Store'
};

const createJwtToken = (user) => {
    if (!user && !user._id) {
        return null;
    }

    const payload = {
        id: user._id,
    };

    return JWT.sign(payload, JWT_SECRET, JWT_OPTS);
};

const verifyJwtToken = (token) => {
    return JWT.verify(token, JWT_SECRET, JWT_OPTS);
};

const getTokenFromHeaders = (req) => {
    const token = req.headers.authorization;

    if (token) {
        const arrayToken = token.split(' ');
        if (arrayToken[0] === 'Bearer' && arrayToken[1]) {
            try {
                return verifyJwtToken(arrayToken[1]);
            } catch (error) {
                return null;
            }
        }
    }
};

module.exports = {
    createJwtToken,
    verifyJwtToken,
    getTokenFromHeaders
};