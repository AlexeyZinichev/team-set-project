/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/index.js'
    ],
    coverageThreshold: {
        global: {
            lines: 100
        }
    }
};
module.exports = config;
