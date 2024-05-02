import UserModel from '../models/UserModel';

class UserController {
    static async get(id: string) {
        console.log(id);
        const users: Array<UserModel.User> = new Array();
        users.push(({
            id: id,
            name: 'Nome Usuário'
        } as UserModel.User));
        return users;
    }

    static async getAll():
        Promise<UserModel.User[]> {
        const users: Array<UserModel.User> = new Array();
        users.push(({
            id: '1',
            name: 'Wellington Zambiazzi'
        } as UserModel.User));
        users.push(({
            id: '2',
            name: 'Eduardo Andrade'
        } as UserModel.User));
        return users;
    }
}

export default UserController;
