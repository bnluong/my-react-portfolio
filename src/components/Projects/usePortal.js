import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// usePortal hook: dynamically create/delete a portal element wrapper and render the element in it
// Note: using this hook will NOT generate anything from server side rendering
const usePortal = (id, element) => {
	const portalRoot = document.getElementById(id);
	const rootEl = useRef(null); // refenrence to root element wrapper
	if (!rootEl.current) {
		// generate the root element wrapper if it doesn't exist
		rootEl.current = document.createElement('div');
		rootEl.current.setAttribute('class', 'portal-content'); // set class attribute
	}
	useEffect(() => {
		portalRoot.appendChild(rootEl.current); // useEffect hook to create/remove the portal element (fix memory leak)
		return () => {
			portalRoot.removeChild(rootEl.current);
		};
	}, [portalRoot]);
	return createPortal(element, rootEl.current); // createPortal hook to put the portal element into the root div
};

export default usePortal;
