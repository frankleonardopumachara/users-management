"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserDao {
    constructor() {
        this.users = [];
        console.log('User dao created');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            user.id = (Math.random() * 10000).toString();
            this.users.push(user);
            return user.id;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find((user) => user.id === userId);
            return user ? user : null;
        });
    }
    getUserByEmail(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find((user) => user.email === userEmail);
            return user ? user : null;
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex((user) => user.id === userId);
            this.users.splice(userIndex, 1, user);
            return `${user.id} updated vid PUT`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex((user) => user.id === user.id);
            if (userIndex < 0)
                return '';
            const currentUser = this.users[userIndex];
            const allowedPatchFields = ['password', 'firstName', 'lastName', 'permissionLevel',];
            for (let field of allowedPatchFields) {
                if (field in user) {
                    // currentUser[field] = user[field]
                }
            }
            this.users.splice(userIndex, 1, currentUser);
            return `${user.id} patched`;
        });
    }
    deleteUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userIndex = this.users.findIndex((user) => user.id === userId);
            this.users.slice(userIndex, 1);
            return `${userId} removed`;
        });
    }
}
exports.default = new UserDao();
