'use client';

import { motion } from 'framer-motion';

import { BigBlock, FeaturedProductsSkeleton, Hero, SmallBlock } from './components';
import { useFeaturedProducts } from './use-featured-products';

export const FeaturedProducts = () => {
	const { products, isLoading } = useFeaturedProducts();

	return (
		<section
			className={
				'grid w-full grid-cols-1 grid-rows-[770px_376px_393px_424px_504px] sm:grid-rows-[600px_376px_393px_424px_504px] lg:grid-cols-4 lg:grid-rows-[500px_328px_272px] xl:grid-rows-[630px_328px_272px] 2xl:grid-rows-[600px_330px_300px]'
			}
		>
			{isLoading && <FeaturedProductsSkeleton />}

			{products.length > 0 && (
				<>
					<Hero product={products[0]} />
					<motion.div
						whileHover={{ scale: 1.02, zIndex: 20 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className='row-start-4 lg:col-span-2 lg:row-start-2'
					>
						<SmallBlock product={products[1]} titleClassName={'text-4xl font-medium'} />
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.02, zIndex: 20 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
						className={'row-start-5 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-2'}
					>
						<BigBlock product={products[2]} />
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.02, zIndex: 20 }}
						transition={{ duration: 0.3, ease: 'easeOut' }}
					>
						<SmallBlock
							product={products[3]}
							imgWidth={500}
							imgHeight={272}
							className={'lg:gap-7 xl:gap-12'}
							imageClassName={
								'2xl:w-[400px] xl:w-[500px] 2xl:h-full xl:h-[260px] w-[192px] h-[200px]'
							}
							imgPositionClassName={
								'absolute 2xl:top-2 2xl:-left-28 xl:-left-28 xl:top-2 lg:top-10 lg:-left-22  lg:translate-x-[unset] left-1/2 -translate-x-1/2'
							}
							textClassName={'2xl:py-[100px] xl:py-12 lg:py-10 lg:pr-5 xl:pr-12 '}
						/>
					</motion.div>

					<motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
						<SmallBlock
							product={products[4]}
							className={'gap-4 bg-gray-900'}
							imgWidth={400}
							imgHeight={190}
							imageClassName={'w-[400px] h-[190px]'}
							imgPositionClassName={
								'absolute top-1/2 -translate-y-1/2 2xl:-left-48 xl:-left-40 lg:-left-38 lg:translate-x-[unset] sm:left-1/2 sm:-translate-x-1/2'
							}
							titleClassName={'text-neutral-50'}
							textClassName={'2xl:py-[100px] xl:py-14 xl:pr-12 lg:py-10 lg:pr-5 '}
						/>
					</motion.div>
				</>
			)}
		</section>
	);
};
