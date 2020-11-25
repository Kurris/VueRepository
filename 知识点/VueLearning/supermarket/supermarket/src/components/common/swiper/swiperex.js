import { Swiper as SwiperClass, Pagination, Autoplay } from 'swiper/core';
SwiperClass.use([Pagination, Autoplay]);
import 'swiper/swiper-bundle.min.css';

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

const swiperOption = {
	pagination: {
		el: '.swiper-pagination',
	},
	loop: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	speed: 1000,
};

export { Swiper, SwiperSlide, swiperOption };
