const axios = require('axios');

const BASE_URL = 'https://www.googleapis.com/userinfo/v2/me';

const authAsync = async (token) => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });
        console.log('Response from Google: ', response);

        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Google request not successfull')
    } catch (error) {
        console.log('Error from Google', error)
        throw error;        
    }
};

const Google = {
    authAsync
};

module.exports =  Google;