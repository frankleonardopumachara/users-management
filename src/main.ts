import {app, routes} from "./app";
import {CommonRoutes} from "./common/routes/common.routes";
import colors from 'colors'
import {DBManger} from "./database/database";

const PORT = process.env.PORT || 3001

const connectToBd = async (): Promise<boolean> => {
    const db = new DBManger()
    await db.authenticate()

    try {
        await db.verifySchema()
        return true
    } catch (e) {
        console.log("Error verifying schema: ", e)
        return false
    }
}

const bootstrap = async () => {
    const isConnectionSuccess = await connectToBd()

    if (isConnectionSuccess) {
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${ PORT }`)
            routes.forEach((route: CommonRoutes) => {
                console.log(`Routes configured for  ${ route.getName() }`)
            })
        })
    } else {
        console.log('app did not start')
    }
}
console.log(colors.red(`Frank`))

bootstrap()



