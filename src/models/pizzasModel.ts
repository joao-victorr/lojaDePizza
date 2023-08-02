
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface PizzaInstance extends Model {
    id: number;
    name: string;
    img: string;
    price: number;
    size: string;
    description: string;
};

export const Pizzas = sequelize.define<PizzaInstance>('pizzas',{

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    size: {
        type: DataTypes.STRING
    },
    descripion: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'pizzas',
    timestamps: false
})