/**
 * @class Character
 * @classdesc Базовый класс персонажа.
 */
export default class Character {
    constructor(name) {
        if (!name || typeof name !== 'string') {
            throw new Error('Character name must be a non-empty string.');
        }
        this.name = name;
        this.id = Symbol(name);
    }

    [Symbol.toPrimitive](hint) {
        return this.id.description;
    }

    equals(other) {
        return other instanceof Character && this.id === other.id;
    }
}
