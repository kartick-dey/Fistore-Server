const buildUserInfo = (data, provider) => {
    const user = {
        name: '',
        email: '',
        picture: '',
        provider: {
            uid: '',
            type: ''
        }, 
    }

    if (provider === 'GOOGLE') {
        user.name = data.name;
        user.email = data.email;
        user.picture = data.picture;
        user.provider.uid = data.id;
        user.provider.type = provider;
    } else if (provider === 'FACEBOOK') {
        user.name = data.name;
        user.email = data.email;
        user.picture = data.picture.data.url;
        user.provider.uid = data.id;
        user.provider.type = provider;
    }

    return user;

}

module.exports = buildUserInfo;