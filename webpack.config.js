var webpack = require('webpack');
var path = require('path');
var cssnext = require('cssnext');
var nested = require('postcss-nested');

var cssLoaders = [
    'style-loader',
    'css-loader!',
    'postcss-loader'
];

var cssnextOptions = cssnext({
    browsers: ['last 1 version', '> 2%']
});

var fileLoaders = [
    'file?hash=sha512&digest=hex&name=[hash].[ext]',
    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
]

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/main.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel?stage=0'], exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: fileLoaders }
        ]
    },

    postcss: [cssnextOptions, nested],

    plugins: [
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        extensions: ['', '.js', '.css'],
        modulesDirectories: ['src', 'node_modules']
    }
};
