import Character from '../src/Character.js';

describe('Character', () => {
    describe('constructor', () => {
        test('should create instance with name and id', () => {
            const char = new Character('Warrior');
            expect(char.name).toBe('Warrior');
            expect(typeof char.id).toBe('symbol');
        });

        test('should throw error if name is missing', () => {
            expect(() => new Character()).toThrow('Character name must be a non-empty string.');
        });

        test('should throw error if name is not a string', () => {
            expect(() => new Character(123)).toThrow('Character name must be a non-empty string.');
        });
    });

    describe('equals', () => {
        test('should return true for same instance', () => {
            const char = new Character('Mage');
            expect(char.equals(char)).toBe(true);
        });

        test('should return true for different instances with same id', () => {
            const id = Symbol('Rogue');
            const char1 = new Character('Rogue');
            const char2 = new Character('Rogue');
            char1.id = id;
            char2.id = id;
            expect(char1.equals(char2)).toBe(true);
        });

        test('should return false for different instances', () => {
            const char1 = new Character('Mage');
            const char2 = new Character('Mage');
            expect(char1.equals(char2)).toBe(false);
        });

        test('should return false for non-Character objects', () => {
            const char = new Character('Mage');
            expect(char.equals({})).toBe(false);
        });
    });
});
