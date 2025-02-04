import Card from "../models/card.model.js";


const searchController = {
  searchPage(req, res) {
    res.render('search');
  },

    // ok avec sequelize
  searchedElementCardSequelize: async (req, res) => {

    try {
      const cardElement = req.query.element;
      const element = await Card.findAll({
        where: {
          element: cardElement,
        },
      });

      res.status(200).render('cardList', {cards: element, title: cardElement});

    } catch(error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);

    }

  },

    // ok avec sequelize
  searchedLevelCardSequelize: async (req, res) => {
    
    try {
      
      const cardLevel = req.query.level;
      const level = await Card.findAll({
        where: {
          level: cardLevel,
        },
      });

      res.status(200).render('cardList', {cards: level, title: cardLevel});
      
    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }

  },

  searchedDirectionValueCardSequelize: async (req, res) => {
    try {

      const cardDirection = `value_${req.query.direction}`;
      
      const cardLevel = req.query.value;
      
      // effectivement, il la reconnait. Mais toujours une erreur dans le navigateur localhost
      // C'est quoi l'erreur ? : An error occured with the database : level is not defined
      const directionLevel = await Card.findAll({
        where: {
          // On mets la constante créée auparavant dans des crochets pour être interprétée par Sequelize 
          [cardDirection]: [cardLevel],
          
        },
      });
      
      res.status(200).render('cardList', {cards: directionLevel, title: (cardLevel)})
      
    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
    
  },
  
  
  // ok avec sequelize
  searchedByNameCardSequelize: async (req, res) => {
    
    try {
      
      const cardName = req.query.name;
      const name = await Card.findAll({
        where: {
          name: cardName,
        }
      })
      
      res.status(200).render('cardList', {cards: name, title: `Recherche : ${cardName}`});
      
    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
    
  },
  
  
};

export default searchController;



// searchedElementCard: async (req, res) => {
  
  //   try {
    //     const cardElement = req.query.element;
    //     const element = await dataMapper.getElementCard(cardElement)
    
    //     res.status(200).render('cardList', {cards: element, title: cardElement});
    
    //   } catch(error) {
      //     res.status(500).send(`An error occured with the database :\n${error.message}`);
      
      //   }
      
      // },
      
      
      // searchedLevelCard: async (req, res) => {
        
        //   try {
          
        //     const cardLevel = req.query.level;
        //     const level = await dataMapper.getLevelCard(cardLevel);
        
        //     res.status(200).render('cardList', {cards: level, title: cardLevel});
        
        //   } catch (error) {
          //     res.status(500).send(`An error occured with the database :\n${error.message}`);
          //   }
          
          // },
          
          
          // searchedByNameCard: async (req, res) => {
            
            //     try {
              
            //       const cardName = req.query.name;
            //       const name = await dataMapper.getNameCard(cardName);
            
            //       res.status(200).render('cardList', {cards: name, title: `Recherche : ${cardName}`});
            
            //     } catch (error) {
              //       res.status(500).send(`An error occured with the database :\n${error.message}`);
              //     }
              
              //   },

              // searchedDirectionValueCard: async (req, res) => {
                
              //   try {
                  
              //     const cardDirection = req.query.direction;
              //     const cardLevel = req.query.value;
                  
              //     const directionLevel = await dataMapper.getDirectionValueCard(cardDirection, cardLevel);
                  
              //     res.status(200).render('cardList', {cards: directionLevel, title: (cardLevel)})
                  
              //   } catch (error) {
              //     res.status(500).send(`An error occured with the database :\n${error.message}`);
              //   }
                
              // },