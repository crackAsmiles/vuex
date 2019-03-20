module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://114.215.25.173:9622',
				changeOrigin: true,
				pathRewrite: { }
			}
		}
	}
}