const {override, fixBabelImports, addLessLoader, addDecoratorsLegacy} = require('customize-cra');
const polyfillEntry = () => config => {
	config.entry = ["@babel/polyfill", './src/index.js'];
	return config;
};
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		localIdentName: "[name]__[local]--[hash:base64:5]",
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': 'rgba(46, 61, 83, 1)'
		}
	}),
	addDecoratorsLegacy(),
	polyfillEntry()
);
