const rootPath = require('path').normalize(__dirname + '/..');

var config = {
    development: {
        root: rootPath,
        port: process.env.PORT || 3000,
        app: {
            name: 'foo-dev',
            base_route: 'v',
            hostName:"localhost"
        },
        secrets: {
            session: "sample-test"
        },

        baseUrl : "localhost:3000"

    },
    production: {
        root: rootPath,
        port: process.env.PORT || 3000,
        app: {
            name: 'foo-product',
            base_route: 'v'
        },
        secrets: {
            session: "sample-test"
        },

    }
};

export default config[process.env.NODE_ENV || 'development'];
