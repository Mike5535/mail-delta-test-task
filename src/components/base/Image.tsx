// import * as React from 'react';

// export default (props) => {
// 	console.log(props)
// 	return (
// 		<img
// 			alt=""
// 			{...props}
// 		/>
// 	);
// };

import * as React from 'react';
import * as Locator from 'smokescreen/Locator';
import ImageSheet from './ImageStyles';
import {updateStyle} from '../../utils/slotSheet';

let style = null;

export default (props) => {
	const locator = new Locator({
		enable: true,
		match: [props.src.replaceAll(/\+/g,'')],
	});

	style = updateStyle(style, locator, ImageSheet(locator, props));

	return (
		<div className={locator.transform(props.src.replaceAll(/\+/g,''))}></div>
	);
};