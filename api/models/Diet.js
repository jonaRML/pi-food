import { DataTypes } from "sequelize";

export default (sequelize)=>{
    sequelize.define('Diet',{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    }
    )
}

