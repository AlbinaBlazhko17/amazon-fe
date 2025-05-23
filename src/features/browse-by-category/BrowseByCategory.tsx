'use client';

import { Icon, Text } from '@/components/common';

import { CategoriesSlider } from './slider/CategoriesSlider';
import { useBrowseByCategory } from './use-browse-by-category';

export const BrowseByCategory = () => {
	const { sliderRef, handleNext, handlePrev, isPrevDisabled, isNextDisabled, handleSlideChange } =
		useBrowseByCategory();

	return (
		<div className={'w-full space-y-4 px-4 py-8 lg:space-y-8 lg:px-12 lg:py-10 xl:px-40 xl:py-20'}>
			<div className={'flex items-center justify-between'}>
				<Text as={'h3'} className={'text-2xl'}>
					Browse By Category
				</Text>
				<div className={'flex items-center gap-4'}>
					<Icon
						name={'ChevronDown'}
						className={`size-8 rotate-90 cursor-pointer text-neutral-700 ${isPrevDisabled ? 'pointer-events-none cursor-default opacity-50' : ''}`}
						onClick={handlePrev}
					/>
					<Icon
						name={'ChevronDown'}
						className={`size-8 -rotate-90 cursor-pointer text-neutral-700 ${isNextDisabled ? 'pointer-events-none cursor-default opacity-50' : ''}`}
						onClick={handleNext}
					/>
				</div>
			</div>
			<CategoriesSlider ref={sliderRef} handleSlideChange={handleSlideChange} />
		</div>
	);
};
