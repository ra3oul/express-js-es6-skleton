import {Router} from 'express';
import settings from '../settings';

import articleController  from '../controllers/article.controller';
const router = Router();

router.get(settings.prefix_route, articleController.index);


