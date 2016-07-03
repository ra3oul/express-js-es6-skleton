'use strict';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import glob from 'glob';
import i18n from 'i18n-2';
import consolidate from 'consolidate';
import busboyBodyParser from 'busboy-body-parser';
import methodOverride from 'method-override';

import appConfig from './config/application';
import dbConfig from './config/database';
import i18nConfig from  './config/i18n';

import moduleLoader from './api/utils/moduleLoader';
import moduleList from './api/modules/module';
import modelLoader from './api/utils/modelLoader';

import helpers from './api/utils/helpers';
import {Router} from 'express';


mongoose.connect(dbConfig.mongo.db);

mongoose.connection.on('connected', function () {
    //console.green('mongoose default connection open to ' + dbConfig.mongo.db);
});

mongoose.connection.on('error', function (err) {
    //console.red('mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    //console.yellow('mongoose default connection disconnected');
});


new modelLoader().load();

const app = express();

i18n.expressBind(app, i18nConfig);


app.engine('html', consolidate.underscore);
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'html');

app.use(bodyParser.json({limit: '10mb'}));
app.use(busboyBodyParser({limit: '10mb'}));
app.use(methodOverride());
app.use(bodyParser.urlencoded({extended: false, limit: '10mb'}));
app.use("/public", express.static(path.join(__dirname, '/public')));

app.use(helpers.allowCrossDomain);


new moduleLoader(moduleList, appConfig.app.base_route, app).load();



export default app;
