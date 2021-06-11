export const swiperProps = {
	id: 'main',
	tag: 'section' ,
	wrapperTag: 'div' ,
	navigation: true,
	// pagination: true
	spaceBetween: 5,
	speed: 500,
	freeMode: true,
	breakpoints: {
		0: {
			slidesPerView: 2,
			slidesPerGroup: 2
		},
		500: {
			slidesPerView: 3,
			slidesPerGroup: 3
		},
		900: {
			slidesPerView: 6,
			slidesPerGroup: 6
		}
	}
}
