module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parserOptions: {
		ecmaFeactures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	plugins: ["react"],
	extends: ["eslint:recommended", "plugin:react/recommended"],
};
