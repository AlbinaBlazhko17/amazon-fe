'use client';

import { type SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

export function useDebouncedState<T>(defaultValue: T, wait: number, options = { leading: false }) {
	const [value, setValue] = useState(defaultValue);
	const timeoutRef = useRef<number | null>(null);
	const leadingRef = useRef(true);

	const clearTimeout = () => window.clearTimeout(timeoutRef.current!);
	useEffect(() => clearTimeout, []);

	const debouncedSetValue = useCallback(
		(newValue: SetStateAction<T>) => {
			clearTimeout();
			if (leadingRef.current && options.leading) {
				setValue(newValue);
			} else {
				timeoutRef.current = window.setTimeout(() => {
					leadingRef.current = true;
					setValue(newValue);
				}, wait);
			}
			leadingRef.current = false;
		},
		[options.leading, wait]
	);

	return [value, debouncedSetValue] as const;
}
