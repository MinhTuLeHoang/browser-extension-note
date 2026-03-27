// Commit: 06/09/2022

import { useEffect, useRef, ReactNode } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ id, children, containerElement = document.body }: PortalProps) => {
	const element = useRef(document.createElement('div'));
	element.current.setAttribute('id', id);

	useEffect(() => {
		containerElement && containerElement.appendChild(element.current);
		return () => {
			// eslint-disable-next-line
			containerElement && containerElement.removeChild(element.current);
		};
	}, [containerElement]);

	return ReactDOM.createPortal(children, element.current);
};

export default Portal;

type PortalProps = {
	id: string;
	children: ReactNode;
	containerElement?: HTMLElement;
};
