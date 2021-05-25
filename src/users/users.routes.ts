import { Application, NextFunction, Request, Response } from "express";
import { CommonRoutes } from "../common/routes/common.routes";
import userController from "./controllers/user.controller";
import usersMiddleware from "./middleware/users.middleware";

export class UsersRoutes extends CommonRoutes {

    constructor(app: Application) {
        super(app, 'UsersRoutes')
    }

    configureRoutes(): Application {
        this.app.route('/users')
            .get(userController.listUsers)
            .post(
                usersMiddleware.validateRequiredUserBodyFields,
                usersMiddleware.validateSameEmailDoesntExist,
                userController.createUser
            )

        this.app.route('/users/:userId')
            .all((req: Request, res: Response, next: NextFunction) => {
                next()
            })
            .get((req: Request, res: Response) => {
                res.status(200).send(`GET to users ${req.params.userId}`)
            })
            .put((req: Request, res: Response) => {
                res.status(200).send('PUT to users')
            })
            .patch((req: Request, res: Response) => {
                res.status(200).send('PATCH to users')
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send('DELETE to users')
            })

        return this.app
    }
}


