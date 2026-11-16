/**
 * @class Settings
 * @classdesc Класс для управления настройками приложения с поддержкой переопределения.
 */
export default class Settings {
    constructor() {
        this._defaultSettings = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);

        this._userSettings = new Map();
    }

    set(key, value) {
        if (!this._defaultSettings.has(key)) {
            throw new Error('Unknown setting: ' + key);
        }

        if (this._defaultSettings.get(key) === value) {
            this._userSettings.delete(key);
        } else {
            this._userSettings.set(key, value);
        }
    }

    get settings() {
        const merged = new Map(this._defaultSettings);
        for (const [key, value] of this._userSettings) {
            merged.set(key, value);
        }
        return merged;
    }

    get(key) {
        if (this._userSettings.has(key)) {
            return this._userSettings.get(key);
        }
        if (this._defaultSettings.has(key)) {
            return this._defaultSettings.get(key);
        }
        return null;
    }

    reset(key) {
        this._userSettings.delete(key);
    }

    resetAll() {
        this._userSettings.clear();
    }
}
