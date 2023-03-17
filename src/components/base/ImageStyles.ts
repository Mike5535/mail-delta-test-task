export default (locator, props) => {
    const {
		src,
		width,
		height,
		className,
	} = props;
    
	return {
		[`.${locator.transform(className)}`]: {
			'background-image': `url(${src})`,
			'width': locator.calcString(width, 'px'),
            'height': locator.calcString(height, 'px'),
		},
	};
};
