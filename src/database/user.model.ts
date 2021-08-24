import {Model, DataTypes, Sequelize} from 'sequelize'

export class User extends Model {

    static async initTable(sequelize: Sequelize) {
        this.init({
            firstName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            modelName: 'Users'
        })
    }
}


