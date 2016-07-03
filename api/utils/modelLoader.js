import glob from 'glob';
import console from 'color-console';

class modelLoader {
    constructor() {
    }

    load() {
        let models = glob.sync(__dirname + '/../dao/models/*.js');
        models.forEach(function (model) {
            require(model);
            console.yellow("register model : " + model);
        });
    }
}

export default modelLoader;
