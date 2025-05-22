import { type SetStateAction, useEffect, useRef, useState } from 'react';

import { useDebouncedState } from '@/lib/hooks';

import { useGetProductsQuery } from '@/modules/products';

interface UseSearchProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const useSearch = ({ isOpen, setIsOpen }: UseSearchProps) => {
	const [searchValue, setSearchValue] = useDebouncedState('', 300);
	const searchRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const searchResultsRef = useRef<HTMLDivElement>(null);
	const {
		data: body,
		isLoading,
		isFetched
	} = useGetProductsQuery(
		{
			search: searchValue
		},
		!!searchValue
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setSearchValue(value);
		setIsDropdownOpen(!!value);
	};

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = (e: MouseEvent) => {
		e.stopPropagation();
		setIsOpen(false);
		setIsDropdownOpen(false);
		setSearchValue('');
	};

	const toggleSearch = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		if (isOpen && inputRef.current) {
			setTimeout(() => {
				inputRef.current?.focus();
			}, 50);
		}
	}, [isOpen]);

	const handleSearchResultClick = () => {
		setIsOpen(false);
		setIsDropdownOpen(false);
		setSearchValue('');
	};

	useEffect(() => {
		if (!isOpen) return;

		const checkIfClickedOutside = (event: MouseEvent) => {
			const target = event.target as Node;

			const isClickInsideSearch = searchRef.current && searchRef.current.contains(target);

			const isClickInsideSearchButton = buttonRef.current && buttonRef.current.contains(target);

			const isClickInsideSearchResults =
				searchResultsRef.current && searchResultsRef.current.contains(target);

			const isClickOnSearchResult = (target as Element)?.closest?.('.search-results') !== null;

			if (
				!isClickInsideSearch &&
				!isClickInsideSearchButton &&
				!isClickInsideSearchResults &&
				!isClickOnSearchResult
			) {
				handleClose(event);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);
		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [isOpen, handleClose]);

	useEffect(() => {
		if (!searchValue) {
			setIsDropdownOpen(false);
		}
	}, [searchValue]);

	return {
		searchValue,
		setSearchValue,
		searchRef,
		buttonRef,
		inputRef,
		searchResultsRef,
		products: body?.data || [],
		isLoading: isLoading || !isFetched,
		handleInputChange,
		handleOpen,
		toggleSearch,
		isDropdownOpen,
		handleSearchResultClick
	};
};
