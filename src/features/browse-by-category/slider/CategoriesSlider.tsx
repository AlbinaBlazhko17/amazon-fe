import { forwardRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { CategoryCard } from './CategoryCard';
import { useCategoriesSlider } from './use-categories-slider';

import 'swiper/css';

interface CategoriesSliderProps {
	handleSlideChange?: () => void;
}

export const CategoriesSlider = forwardRef<SwiperRef, CategoriesSliderProps>(
	({ handleSlideChange }, ref) => {
		const { categories } = useCategoriesSlider();

		return (
			<Swiper
				ref={ref}
				slidesPerView={2.2}
				spaceBetween={16}
				speed={500}
				grabCursor={true}
				effect={'cards'}
				onSlideChange={handleSlideChange}
				breakpoints={{
					768: {
						slidesPerView: 6
					},
					1024: {
						slidesPerView: 6
					},
					1440: {
						spaceBetween: 32,
						slidesPerView: 7
					}
				}}
			>
				{categories.map(category => (
					<SwiperSlide key={category.id} className={'!h-auto'}>
						<CategoryCard category={category} />
					</SwiperSlide>
				))}
			</Swiper>
		);
	}
);
