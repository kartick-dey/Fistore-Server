const UserModel = require('./user.model');
const BuildUserInfo = require('./buildUser');

const getOrCreateUser = async (data, provider) => {
    const user = BuildUserInfo(data, provider);

    try {
        const userInDB = await UserModel.findOne({ email: user.email });

        if (!userInDB) {
            const userInfo = await UserModel.create(user)
            return userInfo;
        }
        if (userInDB.providerUid === user.providerUid && userInDB.provider === user.provider) {
            return userInDB
        }

        userInDB.providerUid = user.providerUid;
        userInDB.provider = user.provider;
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
    getUserByIdFromDB
};