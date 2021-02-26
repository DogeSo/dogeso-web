// region import
const path = require('path')

// puglins
const plugins = {
    HTMLPlugin: require('html-webpack-plugin')
}

// paths
const paths = {
    entry: {
        main: path.resolve(__dirname, '../src/index.js')
    },
    source: {
        main: path.resolve(__dirname, '../src/')
    },
    template: path.resolve(__dirname, './template.html')
}

module.exports = {
    entry: {
        main: [paths.entry.main]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': paths.source.main
        }
    },
    plugins: [
        new plugins.HTMLPlugin({
            template: paths.template,
            filename: 'index.html',
            inject: true,
        })
    ]
}