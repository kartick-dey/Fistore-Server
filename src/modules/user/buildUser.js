const buildUserInfo = (data, provider) => {
    const user = {
        name: '',
        email: '',
        picture: '',
        providerUid: '',
        provider: '' 
    }

    if (provider === 'GOOGLE') {
        user.name = data.name;
        user.email = data.email;
        user.picture = data.picture;
        user.providerUid = data.id;
        user.provider = provider;
    } else if (provider === 'FACEBOOK') {
        user.name = data.name;
        user.email = data.email;
        user.picture = data.picture.data.url;
        user.providerUid = data.id;
        user.provider = provider;
    }

    return user;

}

module.exports = buildUserInfo;