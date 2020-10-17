const Yup = require('yup');

const AuthProvider = require('../../services/authProvider');
const getOrCreateUser = require('./user');
const PROVIDER_ENUM = require('./provider.enum');

const createUser = async (req, res) => {
    const { token, provider } = req.body;

    const bodySchema = Yup.object().shape({
        token: Yup.string().required(),
        provider: Yup.string().oneOf(PROVIDER_ENUM).required()
    });

    try {
        await bodySchema.validate({ token, provider });
        let data;

        if (provider === 'FACEBOOK') {
            data = await AuthProvider.Facebook.authAsync(token.trim());
        } else if (provider === 'GOOGLE') {
            data = await AuthProvider.Google.authAsync(token.trim());
        } else {
        res.status(400).json({ message: 'Error from provide' });
        }
        const user = await getOrCreateUser(data, provider);
        res.status(200).json({ message: 'SUCCESS', user: user });
    } catch (error) {
        console.log('Error while calling provider api: ', error)
        res.status(400).json({ message: error.message });        
    }
};

module.exports = createUser;