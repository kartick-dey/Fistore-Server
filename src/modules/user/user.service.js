const UserModel = require('./user.model');

const getOrCreateUser = async (user) => {

    try {
        let userInDB = null;
        if (user.provider === 'PHONE') {
            userInDB = await UserModel.findOne({phone: user.phone});
        }
        userInDB = await UserModel.findOne({ email: user.email });

        if (!userInDB) {
            const userInfo = await UserModel.create(user);
            return userInfo;
        }
        if (userInDB.providerUid === user.providerUid && userInDB.provider === user.provider) {
            return userInDB;
        }

        userInDB.providerUid = user.providerUid;
        userInDB.provider = user.provider;
        await userInDB.save();
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