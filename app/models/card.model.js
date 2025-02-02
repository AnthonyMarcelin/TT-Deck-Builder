import sequelize from "../database/sequelize.js";
import { DataTypes, Model } from "sequelize";

export default class Card extends Model {}

Card.init(
    {
        name: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        element: {
            type: DataTypes.CHAR,
            allowNull: true,
        },
        level : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value_north: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value_east: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value_south: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        value_west: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        visual_name: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "card",
    },
);


// voir si y'a pas moyen de refacto les value direction pour opti les requêtes.
// passer la méthode fonctionnelle et changer la méthode dans le router