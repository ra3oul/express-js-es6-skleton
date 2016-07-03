import glob from 'glob';
import path from 'path';

class moduleLoader {
    constructor(modules, baseUrl, app) {
        this.modules = modules;
        this.baseUrl = baseUrl;
        this.app = app;
    }

    load() {
        let _this = this;
        this.modules.forEach(function (module) {
            let routes = glob.sync(__dirname + '/../modules/' + module + '/routes/*.js');
            routes.forEach(function (route) {
                let version = path.basename(route);
                version = version.substr(0, version.lastIndexOf('.'));

                route = route.slice(0, -3);
                _this.app.use('/' + _this.baseUrl + version, require(route));
            });
        });
    }
}

export default moduleLoader;
