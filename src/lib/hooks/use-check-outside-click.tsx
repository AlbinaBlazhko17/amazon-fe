import { RefObject, useEffect } from 'react';

export const useCheckOutsideClick = (
	ref: RefObject<HTMLElement | null>,
	handleClickOutside: () => void
) => {
	useEffect(() => {
		const checkIfClickedOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handleClickOutside();
			}
		};

		document.addEventListener('click', checkIfClickedOutside);
		return () => {
			document.removeEventListener('click', checkIfClickedOutside);
		};
	}, []);
};
