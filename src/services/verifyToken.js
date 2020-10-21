const Auth = require('../services/Auth');
const userModel = require('../modules/user/user.model');

const verifyToken = async (req, res, next) => {
    const token = Auth.getTokenFromHeaders(req);

    if (!token) {
        req.user = null;

        return res.sendStatus(401);
    }

    const userInfo = await userModel.findById(token.id);

    if (!userInfo) {
        req.user = null;

        return res.sendStatus(401);
    }

    req.user = userInfo;
    next();
};

module.exports = verifyToken;