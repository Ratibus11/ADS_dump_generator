import { Configuration } from "webpack";
import { resolve } from "path";
import { default as terser } from "terser-webpack-plugin";
import nodeExternals from "webpack-node-externals";

module.exports = (): Configuration => {
	return {
		entry: "./src/main.ts",
		output: {
			path: resolve(),
			filename: "app.js",
			libraryTarget: "commonjs2",
		},
		target: "node",
		mode: "production",
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					test: /\.ts$/,
					loader: "ts-loader",
					exclude: /node_modules/,
				},
			],
		},
		optimization: {
			minimizer: [
				new terser({
					extractComments: false,
				}),
			],
		},
		resolve: {
			extensions: [".ts", ".js"],
		},
	};
};
