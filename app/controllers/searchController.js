import dataMapper from "../dataMapper.js";
import Card from "../models/card.model.js";
// import {sql} from '@sequelize/core';

const searchController = {
  searchPage(req, res) {
    res.render('search');
  },

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
      
      const column = `value_${direction}`; // <= Je sais pas où mettre ça, ca passe nulle part

      const test = {}
      
      const cardDirection = req.query.direction;
      const cardLevel = req.query.value;
      
      const directionLevel = await Card.findAll({
        where: {
          column: cardDirection,
          level: cardLevel,
        },
      });
      
      res.status(200).render('cardList', {cards: directionLevel, title: (cardLevel)})
      
    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
    
  },
  
  searchedDirectionValueCard: async (req, res) => {
    
    try {
      
      const cardDirection = req.query.direction;
      const cardLevel = req.query.value;
      
      const directionLevel = await dataMapper.getDirectionValueCard(cardDirection, cardLevel);
      
      res.status(200).render('cardList', {cards: directionLevel, title: (cardLevel)})
      
    } catch (error) {
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }
    
  },

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