import { useRef, useState } from 'react';
import type { SwiperRef } from 'swiper/react';

export const useBrowseByCategory = () => {
	const [isPrevDisabled, setIsPrevDisabled] = useState(true);
	const [isNextDisabled, setIsNextDisabled] = useState(false);
	const sliderRef = useRef<SwiperRef>(null);

	const handleNext = () => {
		sliderRef.current?.swiper.slideNext();
	};

	const handlePrev = () => {
		sliderRef.current?.swiper.slidePrev();
	};

	const handleSlideChange = () => {
		if (sliderRef.current && sliderRef.current.swiper) {
			setIsPrevDisabled(sliderRef.current.swiper.isBeginning);
			setIsNextDisabled(sliderRef.current.swiper.isEnd);
		}
	};

	return {
		sliderRef,
		handleNext,
		handlePrev,
		handleSlideChange,
		isPrevDisabled,
		isNextDisabled
	};
};
