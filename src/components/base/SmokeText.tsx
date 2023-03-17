import * as React from "react";

export default ({children}) => {
	const shadowRef = React.useRef<HTMLParagraphElement>();
	React.useEffect(() => {
		const shadowRoot = shadowRef.current.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = children;
	},[]);

	return (<span ref={shadowRef}></span>);
};
