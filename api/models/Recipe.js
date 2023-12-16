import {DataTypes}  from "sequelize";


export default (sequelize)=>{
    sequelize.define('recipe',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        sumary:{
            type: DataTypes.STRING,
            allowNull:false
        },
        healthScore:{
            type: DataTypes.INTEGER,
            defaultValue: "00",
        },
        instrutions:{
            type : DataTypes.TEXT,
            allowNull: false
        },
        
    });
}