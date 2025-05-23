import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { useCheckOutsideClick } from '@/lib/hooks';

import { useGetCategoriesQuery } from '@/modules/categories';

export const useMobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
	const pathname = usePathname();
	const menuRef = useRef<HTMLDivElement>(null);
	const { data: body } = useGetCategoriesQuery();

	useCheckOutsideClick(menuRef, () => {
		setIsOpen(false);
	});

	const isActive = (href: string) => {
		return pathname === href;
	};

	const toggleCategories = () => {
		setIsCategoriesOpen(prev => !prev);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return {
		menuRef,
		isOpen,
		setIsOpen,
		isActive,
		categories: body?.data || [],
		isCategoriesOpen,
		toggleCategories
	};
};
