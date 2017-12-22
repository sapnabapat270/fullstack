import path from 'path';
import webpack from 'webpack';

export default{
    entry: [
    'webpack-hot-middleware/client',
        path.join(__dirname,'/client/index.js')
        ],
    output:{
        path:'/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: ['babel' ]
            }
        ]
    },
    resolve: {
        extentions: [ '', '.js' ]
    }
}