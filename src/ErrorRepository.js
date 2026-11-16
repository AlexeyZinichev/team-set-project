/**
 * @class ErrorRepository
 * @classdesc Централизованное хранилище кодов и описаний ошибок.
 */
export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [400, 'Bad Request'],
            [401, 'Unauthorized'],
            [403, 'Forbidden'],
            [404, 'Not Found'],
            [500, 'Internal Server Error'],
            [1001, 'User already exists'],
            [1002, 'Invalid credentials']
        ]);
    }

    translate(code) {
        if (typeof code !== 'number') {
            return 'Unknown error';
        }
        return this.errors.get(code) || 'Unknown error';
    }
}
