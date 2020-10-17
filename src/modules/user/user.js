const UserModel = require('./user.model');
const BuildUserInfo = require('./buildUser');

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

module.exports = getOrCreateUser;