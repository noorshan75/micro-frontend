const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    //entry: "./src/index.js",
    // and webpack starts bundling
    /*output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string (default)
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "bundle.js",
    },*/
    //initialize dev server with port
    devServer: {
        port: 8082
    },
    plugins: [
        //ModuleFederationPlugin
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                "./ProductsIndex": "./src/index"
            }

        }),
        //HtmlWebpackPlugin
        new HtmlWebpackPlugin({ template: "./public/index.html" })
    ],
    devServer: {
        open: true
    }
}