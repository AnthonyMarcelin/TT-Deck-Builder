import database from './database.js'; 

const dataMapper = {
  async getAllCards() {
    const query = "SELECT * FROM card";
    const result = await database.query(query);
    return result.rows;
  },

  getCard: async (id) => {
    
    const sql = {
      text: `SELECT * FROM card WHERE id=$1`,
      values: [id],
    };
    const result = await database.query(sql);
    return result.rows[0];
  },
};


export default dataMapper;
