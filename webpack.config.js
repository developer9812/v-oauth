module.exports = {
	entry: './js/main.js',
	output: {
		filename: './output.js'
	},
	module:{

		rules:[
			{
				test: /\.vue?$/,
				use: {
					loader: 'vue-loader'
				}
			}
    ]

	},
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }

};
