import database from './database/client.js'; 

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  getCard: async (id) => {
    
    const sql = {
      text: `SELECT * FROM card WHERE id = $1;`,
      values: [id],
    };
    const result = await database.query(sql);
    return result.rows[0];
  },

  getElementCard: async (elem) => {

    if(elem === 'null') {
      const sql = `SELECT * FROM card WHERE card.element IS NULL;`;
  
      const result = await database.query(sql);
      return result.rows;
      
    } else {

      const sql = {
        text: `SELECT * FROM card WHERE card.element = $1;`,
        values: [elem],
      };
      
      const result = await database.query(sql);
      return result.rows;
    }
  },

  getLevelCard: async (lvl) => {

    const sql = {
      text: `SELECT * FROM card WHERE level = $1;`,
      values: [lvl],
    };

    const result = await database.query(sql);
    return result.rows;

  },

  getDirectionValueCard: async (direction, lvl) => {
    
    const column = `value_${direction}`;

    const sql = {
      text: `SELECT * FROM card WHERE card.${column} = $1;`,
      values: [lvl],
    };
    console.log(sql);

    const result = await database.query(sql);
    
    return result.rows;

  },

  getNameCard: async (name) => {

    const text = `'%${name}%'`;

    const sql = `SELECT *FROM card WHERE name ILIKE ${text}`;
   
    // const sql = {
    //   text: `SELECT * FROM card WHERE name ILIKE $1`,
    //   values: [text],
    // };

    const result = await database.query(sql);
    
    return result.rows;
  },

};


export default dataMapper;
