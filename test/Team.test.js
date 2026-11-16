import Team from '../src/Team.js';
import Character from '../src/Character.js';

describe('Team', () => {
    let team;
    let char1;
    let char2;
    let char3;

    beforeEach(() => {
        team = new Team();
        char1 = new Character('Warrior');
        char2 = new Character('Mage');
        char3 = new Character('Rogue');
    });

    describe('constructor', () => {
        test('should initialize with empty Set', () => {
            expect(team.members instanceof Set).toBe(true);
            expect(team.members.size).toBe(0);
        });
    });

    describe('add', () => {
        test('should add character to the team', () => {
            team.add(char1);
            expect(team.members.has(char1)).toBe(true);
            expect(team.members.size).toBe(1);
        });

        test('should throw error if character already exists', () => {
            team.add(char1);
            expect(() => team.add(char1)).toThrow('Character Warrior is already in the team.');
        });

        test('should throw error if argument is not a Character instance', () => {
            expect(() => team.add({})).toThrow('Argument must be an instance of Character.');
        });
    });

    describe('addAll', () => {
        test('should add multiple unique characters', () => {
            team.addAll(char1, char2, char3);
            expect(team.members.size).toBe(3);
            expect(team.members.has(char1)).toBe(true);
            expect(team.members.has(char2)).toBe(true);
            expect(team.members.has(char3)).toBe(true);
        });

        test('should not throw error and should ignore duplicates', () => {
            team.add(char1);
            expect(() => team.addAll(char1, char2, char1, char3)).not.toThrow();
            expect(team.members.size).toBe(3);
        });

        test('should handle empty arguments', () => {
            expect(() => team.addAll()).not.toThrow();
            expect(team.members.size).toBe(0);
        });
    });

    describe('toArray', () => {
        test('should return empty array for empty team', () => {
            const result = team.toArray();
            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBe(0);
        });

        test('should convert Set to Array preserving instances', () => {
            team.addAll(char1, char2);
            const arr = team.toArray();
            expect(arr.length).toBe(2);
            expect(arr).toContain(char1);
            expect(arr).toContain(char2);
        });
    });
});
