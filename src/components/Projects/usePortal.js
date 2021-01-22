import React, { useEffect, useRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

// Note to self: using this hooks will NOT generate anything from server side rendering
const usePortal = (id, element) => {
	const portalRoot = document.getElementById(id);
	const rootEl = useRef(null); // refenrence to root element
	if (!rootEl.current) {
		rootEl.current = document.createElement('div');
		rootEl.current.setAttribute('class', 'portal-content');
	}
	useEffect(() => {
		portalRoot.appendChild(rootEl.current);
		return () => {
			portalRoot.removeChild(rootEl.current);
		};
	}, []);
	return ReactDOM.createPortal(element, rootEl.current);
};

export default usePortal;
