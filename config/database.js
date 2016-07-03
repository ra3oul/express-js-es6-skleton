var config = {
    development: {
        mongo: {
            db: 'mongodb://localhost/ads-development',
            db_name: 'ads-development'
        },
        rethink:{
            host: "localhost",
            port: 28015,
            authKey: "",
            db: "ad"

        }
    },
    production: {
        mongo: {
            db: 'mongodb://localhost/ads',
            db_name: 'ads'
        }
    }
};

export default config[process.env.NODE_ENV || 'development'];
