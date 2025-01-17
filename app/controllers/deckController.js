import dataMapper from "../dataMapper.js";

const deckController = {

    deckPage: async (req, res) => {
        try {

            const cards = req.session.deck || [];
            res.render('deck', {cards});

        } catch (error) {
            res.status(500).send(`An error occured with the database :\n${error.message}`);
        }
    },

    addCardInDeck: async (req, res) => {

        if(!req.session.deck) {
            req.session.deck = [];
        };

        const cardId = Number(req.params.id);

        const searchedCard = req.session.deck.find((card) => card.id === cardId);

        if (req.session.deck.length < 5) {

            if(searchedCard === undefined) {
                const card = await dataMapper.getCard(cardId);
                req.session.deck.push(card);
            }
        }
        res.redirect('/deck');
    },

    deleteCardInDeck: async (req, res) => {

        const cardId = Number(req.params.id);

        req.session.deck = req.session.deck.filter((card) => card.id !== cardId);

        res.redirect('/deck');
    },



}

export default deckController;










