const Yup = require('yup');
const AuthProvider = require('../../services/authProvider');

const PROVIDER_ENUM = require('./provider.enum');
const userModel = require('./user.model');

const createUser = async (req, res) => {
    const { token, provider } = req.body;

    const bodySchema = Yup.object().shape({
        token: Yup.string().required(),
        provider: Yup.string().oneOf(PROVIDER_ENUM).required()
    });

    try {
        await bodySchema.validate({ token, provider });

        if (provider === 'FACEBOOK') {
            const data = await AuthProvider.Facebook.authAsync(token.trim());
            res.status(201).json({ message: 'SUCCESS', data: data });
        } else if (provider === 'GOOGLE') {
            const data = await AuthProvider.Google.authAsync(token.trim());
            res.status(201).json({ message: 'SUCCESS', data: data });
        } else {
        res.status(400).json({ message: 'Error from provide' });
        }
    } catch (error) {
        console.log('Error while calling provider api: ', error)
        res.status(400).json({ message: error.message });        
    }
};

module.exports = createUser;