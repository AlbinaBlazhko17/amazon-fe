import Image from 'next/image';

import { Text } from '@/components/common';
import { Button } from '@/components/ui';

import type { Product } from '@/modules/products';

import { divideProductTitle } from '../lib';

interface BigBlockProps {
	product: Product;
}

export const BigBlock = ({ product }: BigBlockProps) => {
	const { nameWithoutLastPart, lastPart } = divideProductTitle(product.name);

	return (
		<div
			className={
				'grid h-full w-full grid-cols-1 grid-rows-2 gap-6 overflow-hidden bg-gray-200 px-4 py-10 lg:grid-cols-[auto_45%] lg:grid-rows-1 lg:gap-3 lg:px-0 lg:py-0'
			}
		>
			<div
				className={'flex flex-col justify-center space-y-4 pl-0 text-center lg:pl-12 lg:text-left'}
			>
				<Text as={'h2'} className={'text-4xl leading-12 font-extralight lg:text-5xl'}>
					{nameWithoutLastPart}

					<Text as={'span'} className={'pr-2 text-4xl font-bold uppercase lg:text-5xl'}>
						{lastPart}
					</Text>
				</Text>
				<Text className={'text-sm text-gray-500'}>{product.description}</Text>
				<Button variant={'secondary'} size={'fit'} className={'w-full px-14 py-4 lg:w-fit'}>
					<Text as={'span'} className={'text-lg font-semibold'}>
						Shop Now
					</Text>
				</Button>
			</div>
			<div className={'relative row-start-1 space-x-4 lg:col-start-2'}>
				<div
					className={
						'absolute px-2 sm:left-1/2 sm:-translate-x-1/2 lg:top-[50px] lg:-right-60 lg:left-[unset] lg:translate-x-[unset] lg:px-0'
					}
				>
					<Image
						src={product.imagesUrl[0]}
						alt={product.name}
						width={1000}
						height={550}
						className={'h-[200px] object-fill lg:h-[550px] lg:w-[1000px]'}
					/>
				</div>
			</div>
		</div>
	);
};
