import {CRUD} from '../../common/services/common.service';
import UsersDao from '../dao/user.dao'
import {CreateUserDto} from '../dto/create.user.dto';
import {PatchUserDto} from '../dto/patch.user.dto';
import {PutUserDto} from '../dto/put.user.dto';
import {UsersRoutes} from '../users.routes';

class UserService implements CRUD {

    async list(limit: number, page: number): Promise<any> {
        console.log('init List Function')
        const myList = await this.getRandomList()
        console.log('call getRandomList')
        const myStrings = myList.map(value => value.toString())
        console.log('map myList')
        return myStrings
    }

    async create(resource: CreateUserDto): Promise<any> {
        return UsersDao.addUser(resource)
    }

    async putById(id: string, resource: PutUserDto): Promise<any> {
        return UsersDao.putUserById(id, resource)
    }

    async readById(id: string): Promise<CreateUserDto | null> {
        return UsersDao.getUserById(id)
    }

    async deleteById(id: string): Promise<string> {
        return UsersDao.deleteUserById(id)
    }

    async patchById(id: string, resource: PatchUserDto): Promise<string> {
        return UsersDao.patchUserById(id, resource)
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email)
    }

    async getRandomList(): Promise<any[]> {
        throw new Error('Error in getRandomList')
    }
}


export default new UserService()
