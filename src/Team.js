import Character from './Character.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
    // Проверка типа аргумента
    if (!(character instanceof Character)) {
        throw new Error('Argument must be an instance of Character.');
    }

    // Проверка на дубликат
    if (this.members.has(character)) {
        // Используем character.name, так как в тесте new Character('Warrior')
        throw new Error(`Character ${character.name} is already in the team.`);
    }

    // Добавление в Set
    this.members.add(character);
}

   addAll(...characters) {
    characters.forEach(char => {
        try {
            this.add(char);
        } catch (error) {
            // Если персонаж уже есть (ошибка), просто ничего не делаем
            // и переходим к следующему символу в массиве
        }
    });
}

    toArray() {
        return Array.from(this.members);
    }
}
