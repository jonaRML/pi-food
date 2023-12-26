import { Sequelize } from "sequelize";
import Recipe from "./models/Recipe.js";
import Diet from "./models/Diet.js";

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/pi_food',{
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  });


Recipe(sequelize);
Diet(sequelize);

console.log(sequelize.models);

const {recipe, diet} = sequelize.models;

recipe.belongsToMany(diet, {through: 'RecipeXDiet'});
diet.belongsToMany(recipe, {through: 'RecipeXDiet'});


export default {
  ...sequelize.models,
  sequelize
};

