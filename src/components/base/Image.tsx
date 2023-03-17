import * as React from 'react';
import * as Locator from 'smokescreen/Locator';
import ImageSheet from './ImageStyles';

export default (props) => {
	const className = props.src.replaceAll(/\+/g, '');
	const locator = new Locator({
		enable: true,
		match: [className],
	});

	locator.insertSheet(ImageSheet(locator, { className, ...props }));

	return (
		<div className={locator.transform(className)}></div>
	);
};