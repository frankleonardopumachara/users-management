import {Sequelize} from "sequelize";
import {User} from "./user.model";

export class DBManger {

    sequelize: Sequelize

    constructor() {
        this.sequelize = new Sequelize('sql-node', 'root', 'admin', {
            dialect: 'mysql',
            host: 'localhost'
        })
    }

    async authenticate(): Promise<boolean> {
        try {
            await this.sequelize.authenticate()
            return true
        } catch (e) {
            console.log('[Error]: ', e)
            return false
        }
    }

    async verifySchema(): Promise<boolean> {
        await User.initTable(this.sequelize)
        const isValid = await this.sequelize.sync()
        return isValid !== null
    }
}
