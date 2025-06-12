import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/components/common';
import { Button } from '@/components/ui';

import type { Product } from '@/modules/products';

import { divideProductTitle } from '../lib';

interface HeroProps {
	product: Product;
}

export const Hero = ({ product }: HeroProps) => {
	const { lastPart, nameWithoutLastPart } = divideProductTitle(product.name);

	return (
		<Link
			href={`/products/${product.slug}`}
			className={
				'grid w-full grid-cols-1 grid-rows-[auto_300px] items-center gap-12 overflow-hidden bg-linear-to-bl from-blue-900 to-blue-900 px-4 pt-[88px] lg:col-span-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-0 xl:px-40 xl:py-[188px] 2xl:px-48'
			}
		>
			<div className={'relative z-20 flex flex-col gap-6'}>
				<Text
					as={'h1'}
					className={
						'text-center text-5xl font-extralight text-neutral-50 lg:text-left lg:text-6xl xl:text-7xl'
					}
				>
					{nameWithoutLastPart} <span className={'font-bold'}>{lastPart}</span>
				</Text>
				<Text className={'text-center text-lg text-gray-400 lg:text-left'}>
					{product.description}
				</Text>
				<Button
					variant={'secondary-white'}
					size={'fit'}
					className={'self-center px-14 py-4 lg:self-start'}
				>
					<Text as={'span'} className={'text-lg font-semibold'}>
						Shop Now
					</Text>
				</Button>
			</div>
			<div className={'relative row-start-2 lg:col-start-2 lg:col-end-4'}>
				<div
					className={
						'absolute -bottom-32 left-1/2 z-10 -translate-x-1/2 sm:-bottom-56 lg:right-10 lg:bottom-0 lg:left-[unset] lg:translate-x-[unset] xl:right-12 xl:-bottom-[138px] 2xl:right-16'
					}
				>
					<Image
						src={product.imagesUrl[0]}
						alt={product.name}
						width={300}
						height={406}
						className={
							'w-[343px] scale-150 object-contain sm:h-[406px] sm:w-[300px] sm:scale-125 lg:h-[406px] lg:w-[300px]'
						}
					/>
				</div>
			</div>
		</Link>
	);
};
