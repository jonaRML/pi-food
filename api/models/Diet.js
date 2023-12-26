import { DataTypes } from "sequelize";

export default (sequelize)=>{
    sequelize.define('Diet',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

