const axios = require('axios');

const FIELDS = 'name,email,picture';

const BASE_URL = `https://graph.facebook.com/v8.0/me?fields=${FIELDS}`;

const authAsync = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}&access_token=${token}&debug=all`);
        // console.log('Response from facebook: ', response);

        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Facebook request not successfull');
    } catch (error) {
        throw error;        
    }
};

const Facebook = {
    authAsync
};

module.exports =  Facebook;