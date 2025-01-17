import express from 'express'; 
import mainController from './controllers/mainController.js'; 
import searchController from './controllers/searchController.js';

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/search', searchController.searchPage);


export default router;
