import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";

class UserMiddleware {

    async validateRequiredUserBodyFields(req: Request, res: Response, next: NextFunction) {
        if (req.body && req.body.email && req.body.password) {
            next()
        } else {
            res.status(400).json({ error: 'Missing required fields email and password' })
        }
    }

    async validateSameEmailDoesntExist(req: Request, res: Response, next: NextFunction) {
        const user = await userService.getUserByEmail(req.body.email)
        if (user) {
            res.status(400).send({ error: `User email already exist` })
        } else {
            next()
        }
    }

    async validateSameEmailBelongToSameuser(req: Request, res: Response, next: NextFunction) {
        const user = await userService.getUserByEmail(req.body.email)
        if (user && (user.id === req.params.userId)) {
            next()
        } else {
            res.status(400).json({ error: 'Invalid Email' })
        }
    }

    validatePatchEmail = async (req: Request, res: Response, next: NextFunction) => {
        if (req.body.email) {
            this.validateSameEmailBelongToSameuser(req, res, next)
        } else {
            next()
        }
    }

    async validateUserExist(req: Request, res: Response, next: NextFunction) {
        const user = await userService.readById(req.params.userId)
        if (user) {
            next()
        } else {
            res.status(404).json({ error: `User ${req.params.userId} not found` })
        }
    }

    async extractUserId(req: Request, res: Response, next: NextFunction) {
        req.body.id = req.params.userId
        next()
    }
}

export default new UserMiddleware()