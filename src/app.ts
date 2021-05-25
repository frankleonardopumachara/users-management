import express, { Request, Response } from 'express'
import cors from 'cors'
import { CommonRoutes } from './common/routes/common.routes'
import { UsersRoutes } from './users/users.routes'
import { mwError } from './error/error.mw'

export const app: express.Application = express()
export const routes: CommonRoutes[] = []


/** Configure middlewares */

// Parse all incoming requests as JSON 
app.use(express.json())

// Allow cross-origin requests
app.use(cors())

/** Add routes to our application */
routes.push(new UsersRoutes(app))

/** Make sure everything is working properly */
app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello world')
})

// Error handling mw
app.use(mwError)