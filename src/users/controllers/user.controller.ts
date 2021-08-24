import {Request, Response, NextFunction} from 'express';
import {HttpError} from '../../error/error.mw';

import UserService from "../services/user.service";
import {User} from "../../database/user.model";

class UserController {

    async listUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await User.findAll()
            console.log('users', users)
            res.status(200).json(users)
        } catch (e) {
            next(new HttpError(500, 'Users Not found'))
        }
    }

    async getUserById(req: Request, res: Response) {
        const userId: number = parseInt(req.params.userId)
        const user = await User.findByPk(userId, { raw: false })
        console.log('user', user)
        console.log('userToJSON', user?.toJSON())
        res.status(200).json(user)
    }

    async getUserByFirstName(req: Request, res: Response) {
        const userFirstName: string = req.params.firstName
        const dbUser: any = await User.findOne({
            where: {
                firstName: userFirstName
            },
            raw: true
        })
        console.log('dbUser', dbUser?.firstName)
        res.status(200).json(dbUser)
    }

    async createUser(req: Request, res: Response) {
        const { firstName, lastName, age } = req.body
        try {
            const userDb = await User.upsert({
                firstName,
                lastName,
                age
            })
            const [user, isNewUser] = userDb
            console.log('plain user', user)
            console.log('is new user', isNewUser)
            res.status(201).json(userDb)
        } catch (e) {
            res.status(500).json({ error: e.message })
        }
    }

    async patchUser(req: Request, res: Response) {
        if (req.body.password) {
            req.body.password = req.body.password
        }
        await UserService.patchById(req.body.id, req.body)
    }

    async put(req: Request, res: Response) {
        const result = UserService.putById(req.body.id, req.body)
        res.status(204).send(result)
    }

    async removeUser(req: Request, res: Response) {
        const result = await UserService.patchById(req.body.id, req.body)
        res.status(204).send(result)
    }
}

export default new UserController()
