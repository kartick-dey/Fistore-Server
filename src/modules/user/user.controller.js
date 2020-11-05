const { getOrCreateUser, getUserByIdFromDB } = require('./user.service');

const createUser = async (req, res) => {
    const userData = req.body;
    try {
        const user = await getOrCreateUser(userData);
        res.status(200).json({ message: 'SUCCESS', user: user });
    } catch (error) {
        console.log('Error while saving data: ', error)
        res.status(400).json({ message: error.message });        
    }
};

const getUserById = async (req, res) => {
    try {
        if (req.user) {
            const userInfo = await getUserByIdFromDB(req.user._id);
            res.status(200).json(userInfo);
        } else {
            res.status(400).json({ message: 'No user found'});
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUserById
};