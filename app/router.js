import express from 'express'; 
import mainController from './controllers/mainController.js'; 
import searchController from './controllers/searchController.js';

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/card/:id', mainController.getCard);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchedElementCard);


export default router;
