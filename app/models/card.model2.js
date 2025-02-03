import sequelize from "../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Card extends Model {}

const directionValues = ['north', 'east', 'south', 'west'];

const cardAttributes = {
    name: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    element: {
        type: DataTypes.CHAR,
        allowNull: true,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    visual_name: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
};

directionValues.forEach(direction => {
    cardAttributes[`value_${direction}`] = {
        type: DataTypes.INTEGER,
        allowNull: false,
    };
});

Card.init(cardAttributes, {
    sequelize,
    tableName: "card",
});


// PS : ce n'est pas de moi