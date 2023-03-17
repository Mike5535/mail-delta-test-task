export default (locator, props) => {
    const {
		src,
		width,
		height,
	} = props;
    // console.log('src',src)
    // console.log('width',width)
    // console.log('props',props)
    // console.log({
	// 	[`${src}`]: {
	// 		'background-image': `url(${src})`,
	// 		'width': locator.calcString(width, 'px'),
    //         'height': locator.calcString(height, 'px'),
	// 	},
	// })
    
	return {
		[`.${locator.transform(props.src.replaceAll(/\+/g,''))}`]: {
			'background-image': `url(${src})`,
			'width': locator.calcString(width, 'px'),
            'height': locator.calcString(height, 'px'),
		},
	};
};
