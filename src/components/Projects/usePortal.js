import React, { useEffect, useRef } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

// Note to self: using this hooks will NOT generate anything from server side rendering
const usePortal = (id, element) => {
	const portalRoot = document.getElementById(id);
	const rootEl = useRef(null); // refenrence to root element wrapper
	if (!rootEl.current) {
		// generate the root element wrapper if it doesn't exist
		rootEl.current = document.createElement('div');
		rootEl.current.setAttribute('class', 'portal-content'); // set class just in case
	}
	useEffect(() => {
		portalRoot.appendChild(rootEl.current); // useEffect hook to create/remove the portal element (fix memory leak)
		return () => {
			portalRoot.removeChild(rootEl.current);
		};
	}, []);
	return ReactDOM.createPortal(element, rootEl.current); // createPortal hook to put the portal element into the root div
};

export default usePortal;
