'use client';

import { VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { buttonVariants } from '../../ui';

interface NavLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof buttonVariants> {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
	activeClassName?: string;
	className?: string;
}

const NavLink = ({
	href,
	children,
	isActive,
	activeClassName,
	variant = 'plain',
	size,
	borderRadius,
	className,
	...props
}: NavLinkProps) => {
	const pathname = usePathname();
	const isActiveLink = isActive ?? pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				'block w-full transition-colors duration-200 ease-in-out',
				buttonVariants({ variant, size, borderRadius }),
				className,
				isActiveLink && activeClassName
			)}
			{...props}
		>
			{children}
		</Link>
	);
};

export { NavLink };
