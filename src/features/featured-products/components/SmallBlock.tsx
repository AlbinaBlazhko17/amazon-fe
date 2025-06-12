import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/components/common';

import { cn } from '@/lib/utils';

import type { Product } from '@/modules/products';

import { divideProductTitle } from '../lib';

interface SmallBlockProps {
	product: Product;
	className?: string;
	imgPositionClassName?: string;
	imageClassName?: string;
	imgWidth?: number;
	imgHeight?: number;
	imgObjectFit?: string;
	titleClassName?: string;
	textClassName?: string;
}

export const SmallBlock = ({
	product,
	className = '',
	imgWidth = 380,
	imgHeight = 350,
	imgPositionClassName = 'absolute 2xl:-top-5 2xl:-left-28 xl:-left-20 lg:top-0 lg:-left-32 lg:translate-x-[unset] left-1/2 -translate-x-1/2',
	imgObjectFit = 'cover',
	imageClassName = 'lg:h-[350px] lg:w-[380px] size-[200px] object-cover',
	titleClassName,
	textClassName
}: SmallBlockProps) => {
	const { nameWithoutLastPart, lastPart } = divideProductTitle(product.name);

	return (
		<Link
			href={`/products/${product.slug}`}
			className={cn(
				'relative grid h-full w-full grid-rows-[200px_auto] gap-6 overflow-hidden bg-gray-50 px-4 py-10 lg:grid-cols-[30%_auto] lg:grid-rows-1 lg:gap-12 lg:px-0 lg:py-0',
				className
			)}
		>
			<motion.div
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 0.05 }}
				transition={{ duration: 0.3 }}
				className='absolute inset-0 z-10 bg-gradient-to-br from-gray-900 to-gray-600'
			/>

			<motion.div
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
				className={'relative'}
			>
				<div className={imgPositionClassName}>
					<Image
						src={product.imagesUrl[0]}
						alt={product.name}
						width={imgWidth}
						height={imgHeight}
						objectFit={imgObjectFit}
						className={imageClassName}
					/>

					<motion.div
						initial={{ x: '-100%', opacity: 0 }}
						whileHover={{ x: '100%', opacity: 0.3 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className='absolute inset-0 skew-x-12 transform bg-gradient-to-r from-transparent via-white to-transparent'
					/>
				</div>
			</motion.div>
			<div className={cn('space-y-4 lg:py-[100px] lg:pr-12', textClassName)}>
				<Text
					as={'h2'}
					className={cn('text-center text-3xl font-extralight lg:text-left', titleClassName)}
				>
					{nameWithoutLastPart}
					<Text as={'span'} className={'text-3xl font-medium'}>
						{lastPart}
					</Text>
				</Text>

				<Text className='text-center text-sm leading-relaxed text-gray-500 lg:text-left'>
					{product.description}
				</Text>
			</div>
		</Link>
	);
};
