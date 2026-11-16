const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'TeamBuilder',
            type: 'umd'
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    }
};
