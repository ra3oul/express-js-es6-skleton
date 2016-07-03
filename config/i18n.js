import application from 'application';

var config = {
    development: {
        locales: ['fa'],
        directory: application.root + '/locales',
        extension: '.json'
    },
    production: {
        locales: ['fa'],
        directory: application.root + '/locales',
        extension: '.json'
    }
};

export default config[process.env.NODE_ENV || 'development'];