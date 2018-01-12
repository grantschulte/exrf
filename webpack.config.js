const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const dotenv = require("dotenv-webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const { dirs } = require("./server/config");

module.exports = (env) => {
  const target = process.env.npm_lifecycle_event;

  // Common Configuration

  const common = {
    entry: {
      "app": path.join(dirs.client.src, "index.js")
    },

    output: {
      path: dirs.client.build,
      filename: "scripts/[name].js",
      publicPath: "/"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        },
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            presets: ["es2015"]
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.client.src}/fonts/**/[name].[ext]`
        },
        {
          test: /\.(ico|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: `file-loader?name=${dirs.client.src}/images/**/[name].[ext]`
        }
      ]
    },

    /*
     * Resolve module folders. This allows us to import files into
     * other files (in the client directory) without messy relative paths.
     */

    resolve: {
      modules: [
        "node_modules"
      ]
    },

    plugins: [
      new dotenv(),
      new ExtractTextPlugin({
        filename: "styles/[name].css"
      }),
      new CopyWebpackPlugin([
        {
          from: `${dirs.client.public}/**/*`,
          to: dirs.client.build,
          flatten: true
        },
        {
          from: `${dirs.client.src}/images/**/*`,
          to: `${dirs.client.build}/images`,
          flatten: true
        },
        {
          from: `${dirs.client.src}/fonts/**/*`,
          to: `${dirs.client.build}/fonts`,
          flatten: true
        }
      ])
    ]
  };

  // Development Configuration

  if (target === "start:dev" || target === "client:dev") {
    return merge(common, {
      devtool: "source-map",

      module: {
        rules: [
          {
            test:/\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1
                  }
                },
                {
                  loader: "postcss-loader?parser=postcss-scss",
                  options: {
                    plugins: [
                      require("autoprefixer")()
                    ]
                  }
                },
                "sass-loader"
              ]
            })
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          },
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          }
        ]
      },

      stats: {
        colors: true
      },

      devServer: {
        port: 9000
      }
    });
  }

  // Production Configuration

  if (target === "build") {
    return merge(common, {
      module: {
        rules: [
          {
            test:/\.(s*)css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                {
                  loader: "css-loader",
                  options: {
                    importLoaders: 1
                  }
                },
                {
                  loader: "postcss-loader?parser=postcss-scss",
                  options: {
                    plugins: [
                      require("autoprefixer")(),
                      require("postcss-clean")()
                    ]
                  }
                },
                "sass-loader"
              ]
            })
          }
        ]
      },

      plugins: [
        new UglifyWebpackPlugin(),
        new ImageminPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i
        })
      ]
    });
  }
};
