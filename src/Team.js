import Character from './Character.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (!(character instanceof Character)) {
            throw new Error('Argument must be an instance of Character.');
        }
        if (this.members.has(character)) {
            throw new Error(Character \ is already in the team.);
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for (const character of characters) {
            try {
                this.add(character);
            } catch (e) {
            }
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}
