import UserModel from '../models/UserModel';

var users: Array<UserModel.User> = [];
users.push(({
    id: '1',
    name: 'Você',
    email: 'duduandrade19@gmail.com',
    data: '02/05/24',
    idade: '18',
} as UserModel.User));
users.push(({
    id: '2',
    name: 'Vwellington',
    email: 'wellington@gmail.com',
    data: '05/05/24',
    idade: '32',
} as UserModel.User));

class UserController {
    static async get(id: string) {
        return users.filter((valorAtual) => {
            return valorAtual.id.includes(id)
        });
    }

    static async add(user: UserModel.User) {
       return user;
    }

    static async update(user: UserModel.User) {
        console.log('deu certo update')
        return user;
    }

    static async getAll():
        Promise<UserModel.User[]> {
            console.log('getall')
        return users;
    }
}

export default UserController;
