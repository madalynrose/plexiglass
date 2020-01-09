export const onClientEntry = (_, pluginOptions) => {
	if (process.env.NODE_ENV === 'development') {
		const { noMouseDay, screenOverlay } = pluginOptions;
		let date = new Date();
		let dayOfWeek = date.getDay();

		if (!noMouseDay || dayOfWeek === noMouseDay) {
			import('no-mouse-days');
			if (screenOverlay === true) {
				import('./obscureScreen.css');
			}
		}
	}
};
