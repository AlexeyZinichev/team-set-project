import ErrorRepository from '../src/ErrorRepository.js';

describe('ErrorRepository', () => {
    let repository;

    beforeEach(() => {
        repository = new ErrorRepository();
    });

    describe('constructor', () => {
        test('should initialize with a Map containing predefined errors', () => {
            expect(repository.translate(404)).toBe('Not Found');
            expect(repository.translate(1001)).toBe('User already exists');
        });
    });

    describe('translate', () => {
        test('should return correct description for existing error code', () => {
            expect(repository.translate(500)).toBe('Internal Server Error');
        });

        test('should return "Unknown error" for non-existing code', () => {
            expect(repository.translate(999)).toBe('Unknown error');
        });

        test('should return "Unknown error" for string input', () => {
            expect(repository.translate('404')).toBe('Unknown error');
        });

        test('should return "Unknown error" for null input', () => {
            expect(repository.translate(null)).toBe('Unknown error');
        });
    });
});
