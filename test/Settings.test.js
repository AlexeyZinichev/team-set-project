import Settings from '../src/Settings.js';

describe('Settings', () => {
    let settings;

    beforeEach(() => {
        settings = new Settings();
    });

    describe('constructor', () => {
        test('should initialize with default values', () => {
            const result = settings.settings;
            expect(result.get('theme')).toBe('dark');
            expect(result.get('music')).toBe('trance');
            expect(result.get('difficulty')).toBe('easy');
            expect(result.size).toBe(3);
        });

        test('user settings map should be empty initially', () => {
            expect(settings._userSettings.size).toBe(0);
        });
    });

    describe('set', () => {
        test('should set a new user value', () => {
            settings.set('theme', 'light');
            expect(settings.get('theme')).toBe('light');
            expect(settings._userSettings.get('theme')).toBe('light');
        });

        test('should override existing user value', () => {
            settings.set('music', 'rock');
            settings.set('music', 'chillout');
            expect(settings.get('music')).toBe('chillout');
            expect(settings._userSettings.size).toBe(1);
        });

        test('should delete user setting if value matches default', () => {
            settings.set('difficulty', 'hard');
            expect(settings._userSettings.has('difficulty')).toBe(true);
            settings.set('difficulty', 'easy');
            expect(settings._userSettings.has('difficulty')).toBe(false);
            expect(settings.get('difficulty')).toBe('easy');
        });

        test('should throw error for unknown setting key', () => {
            expect(() => settings.set('volume', 'high')).toThrow('Unknown setting: volume');
        });
    });

    describe('get', () => {
        test('should return user value if set', () => {
            settings.set('theme', 'gray');
            expect(settings.get('theme')).toBe('gray');
        });

        test('should return default value if user value is not set', () => {
            expect(settings.get('music')).toBe('trance');
        });

        test('should return null for unknown key', () => {
            expect(settings.get('unknown')).toBe(null);
        });
    });

    describe('settings getter (merging)', () => {
        test('should return merged map with one override', () => {
            settings.set('theme', 'light');
            const result = settings.settings;
            expect(result.get('theme')).toBe('light');
            expect(result.get('music')).toBe('trance');
            expect(result.size).toBe(3);
        });

        test('should return pure defaults if no user settings exist', () => {
            const result = settings.settings;
            expect(result.get('difficulty')).toBe('easy');
        });

        test('should return merged map with multiple overrides', () => {
            settings.set('theme', 'gray');
            settings.set('music', 'off');
            const result = settings.settings;
            expect(result.get('theme')).toBe('gray');
            expect(result.get('music')).toBe('off');
            expect(result.get('difficulty')).toBe('easy');
        });
    });

    describe('reset', () => {
        test('should reset specific setting to default', () => {
            settings.set('theme', 'light');
            settings.reset('theme');
            expect(settings.get('theme')).toBe('dark');
            expect(settings._userSettings.has('theme')).toBe(false);
        });
    });

    describe('resetAll', () => {
        test('should clear all user customizations', () => {
            settings.set('theme', 'gray');
            settings.set('music', 'pop');
            settings.resetAll();
            expect(settings._userSettings.size).toBe(0);
            expect(settings.get('theme')).toBe('dark');
        });
    });
});
