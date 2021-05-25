import { CreateUserDto } from "../dto/create.user.dto"
import { PatchUserDto } from "../dto/patch.user.dto"
import { PutUserDto } from "../dto/put.user.dto"

class UserDao {

    users: CreateUserDto[] = []

    constructor() {
        console.log('User dao created')
    }

    async addUser(user: CreateUserDto): Promise<string> {
        user.id = (Math.random() * 10000).toString()
        this.users.push(user)
        return user.id
    }

    async getUsers(): Promise<CreateUserDto[]> {
        return this.users
    }

    async getUserById(userId: string): Promise<CreateUserDto | null> {
        const user = this.users.find((user: CreateUserDto) => user.id === userId)
        return user ? user : null
    }

    async getUserByEmail(userEmail: string): Promise<CreateUserDto | null> {
        const user = this.users.find((user: CreateUserDto) => user.email === userEmail)
        return user ? user : null
    }

    async putUserById(userId: string, user: PutUserDto): Promise<string> {
        const userIndex = this.users.findIndex((user: CreateUserDto) => user.id === userId)
        this.users.splice(userIndex, 1, user)
        return `${user.id} updated vid PUT`
    }

    async patchUserById(userId: string, user: PatchUserDto): Promise<string> {
        const userIndex = this.users.findIndex((user: CreateUserDto) => user.id === user.id)
        if (userIndex < 0) return ''
        const currentUser = this.users[userIndex]
        const allowedPatchFields = ['password', 'firstName', 'lastName', 'permissionLevel',]
        for (let field of allowedPatchFields) {
            if (field in user) {
                // currentUser[field] = user[field]
            }
        }
        this.users.splice(userIndex, 1, currentUser)
        return `${user.id} patched`
    }

    async deleteUserById(userId: string): Promise<string> {
        const userIndex = this.users.findIndex((user: CreateUserDto) => user.id === userId)
        this.users.slice(userIndex, 1)
        return `${userId} removed`
    }
}


export default new UserDao()

