'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1536243315185_8968';

    config.middleware = [ 'errorHandler' ];

    config.mongoose = {
        url: 'mongodb://127.0.0.1/blog',
        options: {},
    };

    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['http://localhost:3000'], //配置白名单
    };

    config.jwt = {
        secret: '!o5sv&MXoNmiW@L@IkAR',
        expires: 30 * 60, // unit: seconds
    };

    config.cors = {
        credentials: true,
        origin: ctx => ctx.get('origin'),
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };

    return config;
};
