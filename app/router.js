import express from 'express'; 
import mainController from './controllers/mainController.js'; 
import searchController from './controllers/searchController.js';
import deckController from './controllers/deckController.js';

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/card/:id', mainController.getCard);
router.get('/search', searchController.searchPage);
router.get('/search/element', searchController.searchedElementCard);
router.get('/search/level', searchController.searchedLevelCard);
router.get('/deck', deckController.deckPage);
router.get('/deck/add/:id', deckController.addCardInDeck);
router.get('/deck/delete/:id', deckController.deleteCardInDeck);



export default router;
