import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../../error/error.mw';

import UserService from "../services/user.service";

class UserController {

    async listUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserService.list(100, 0)
            console.log('users value')
            res.status(200).json(users)
        } catch (e) {
            // console.log(e.message, e.name, e.stack)
            // console.log(e.name)
            // console.log(e.message)
            // console.log(e.stack)
            const msg = e
            next(new HttpError(500, 'Users Not found'))
            // res.status(500).json({ error: e.message })
        }
    }

    async getUserById(req: Request, res: Response) {
        const user = await UserService.readById(req.body.id)
        res.status(200).json(user)
    }

    async createUser(req: Request, res: Response) {
        req.body.password = await req.body.password
        const userId = await UserService.create(req.body)
        res.status(201).send({ id: userId })
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
