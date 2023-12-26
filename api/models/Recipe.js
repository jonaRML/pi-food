import {DataTypes}  from "sequelize";


export default (sequelize)=>{
    sequelize.define('Recipe',{
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
        image:{
            type: DataTypes.STRING,    
        },
        healthScore:{
            type: DataTypes.INTEGER,
            defaultValue: "00",
        },
        instructions:{
            type : DataTypes.TEXT,
            allowNull: false
        },
        
    });
}