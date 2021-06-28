const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const outputFolder = env.goal === 'deploy' ? 'cd' : 'build';

    return {
        mode: 'development',
        devtool: 'inline-source-map',
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, outputFolder),
            filename: 'index.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.html$/i,
                    use: 'html-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html'),
            }),
        ],
    };
};
