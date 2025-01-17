import dataMapper from '../dataMapper.js'; 

const mainController = {
  async homePage(req, res) {
    try {
      const cards = await dataMapper.getAllCards();
      res.render('cardList', {
        cards,
        title: 'Liste des cartes'
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
  },

  getCard: async (req, res) => {

    try {
      const cardId = req.params.id;
      const card = await dataMapper.getCard(cardId);

      if (!card) {
        return res.status(404).send("La carte que vous cherchez n'existe pas");
      }  

        res.status(200).render('cardPage', {card, title: card.name})

    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }

  },

}


export default mainController;
