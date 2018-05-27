
const path = require('path');

module.exports = {
    entry: './src//playground/redux-expensify.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'), //complete path from the root folder
        filename: 'bundle.js'
    },
    //loader
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
    ],
    },
    devtool: 'cheap-module-eval-source-map', //enables us to see errors within the actual app files rather than the react dom errors
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

