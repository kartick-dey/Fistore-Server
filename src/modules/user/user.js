const UserModel = require('./user.model');
const BuildUserInfo = require('./buildUser');
const Auth = require('../../services/Auth');


const userAuth = async (req, res, next) => {
    const token = Auth.getTokenFromHeaders(req);

    if (!token) {
        req.user = null;

        return res.sendStatus(401);
    }
    
    const userInfo = await UserModel.findById(token.id);

    if (!userInfo) {
        req.user = null;

        return res.sendStatus(401);
    }

    req.user = userInfo;
    next();
};

const getOrCreateUser = async (data, provider) => {
    const user = BuildUserInfo(data, provider);

    try {
        const userInDB = await UserModel.findOne({ email: user.email });

        const { provider, ...userData } = user;

        if (!userInDB) {
            const userInfo = await UserModel.create({
                ...userData,
                provider: [provider]
            })
            return userInfo;
        }
        const providerExist = userInDB.provider.find(element => element.uid === user.provider.uid && element.type === user.provider.type,);
        if (providerExist) {
            return userInDB
        }

        userInDB.provider.push(user.provider)
        await userInDB.save()
        return userInDB;
    } catch (error) {
        throw error;
    }
};

const getUserByIdFromDB = async (userId) => {
    try {
        const user = await UserModel.findById(userId);
        return user;
    } catch (error) {
        throw new Error('User not found');
    }
};

module.exports = {
    getOrCreateUser,
    userAuth,
    getUserByIdFromDB
};