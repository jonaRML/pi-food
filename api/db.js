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

const dietas =[
  {id:'bcac94d6-d445-11ee-a506-0242ac120002',name: 'Gluten Free'},
  {id:'fe8f0b66-d445-11ee-a506-0242ac120002',name:'Ketogenic'},
  {id:'06392de2-d446-11ee-a506-0242ac120002',name:'Vegetarian'},
  {id:'12ae6934-d446-11ee-a506-0242ac120002',name:'Lacto Ovo Vegetarian'},
  {id:'216f1536-d446-11ee-a506-0242ac120002',name:'Vegan'},
  {id:'26924452-d446-11ee-a506-0242ac120002',name:'Pescetarian'},
  {id:'2c412300-d446-11ee-a506-0242ac120002',name:'Paleo'},
  {id:'379bf446-d446-11ee-a506-0242ac120002',name:'Primal'},
  {id:'3c6f7196-d446-11ee-a506-0242ac120002',name:'Low FODMAP'},
  {id:'421e6caa-d446-11ee-a506-0242ac120002',name:'Whole30'}];

diet.bulkCreate(dietas)
    .then(()=>console.log("se insertaron los datos "))
    .catch(error=> console.log("hubo un error", error))


export default sequelize


