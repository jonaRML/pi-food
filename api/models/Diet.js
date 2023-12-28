import { DataTypes } from "sequelize";

export default (sequelize)=>{
    sequelize.define('diet',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}

