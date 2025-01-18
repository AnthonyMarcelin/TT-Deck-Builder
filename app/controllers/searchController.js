import dataMapper from "../dataMapper.js";

const searchController = {
  searchPage(req, res) {
    res.render('search');
  },

  searchedElementCard: async (req, res) => {

    try {
      const cardElement = req.query.element;
      const element = await dataMapper.getElementCard(cardElement)

      res.status(200).render('cardList', {cards: element, title: cardElement});

    } catch(error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);

    }

  },

  searchedLevelCard: async (req, res) => {

    try {

      const cardLevel = req.query.level;
      const level = await dataMapper.getLevelCard(cardLevel);

      res.status(200).render('cardList', {cards: level, title: cardLevel});

    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }

  },

};

export default searchController;
