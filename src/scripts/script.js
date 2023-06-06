gsap.registerPlugin(ScrollTrigger)

/*!--Анимации секции 1--start--!*/

gsap.fromTo(
	'.title_section_1',
	{ y: 50, opacity: 0 },
	{ y: 0, opacity: 1, duration: 0.8, delay: 0.6 }
)
gsap.fromTo(
	'.text_section_1',
	{ y: 50, opacity: 0 },
	{ y: 0, opacity: 1, duration: 0.8, delay: 0.8 }
)
gsap.fromTo(
	'#number__1',
	{ y: 20, opacity: 0 },
	{ y: 0, opacity: 1, duration: 0.6, delay: 1.1 }
)
gsap.fromTo(
	'#number__2',
	{ y: 20, opacity: 0 },
	{ y: 0, opacity: 1, duration: 0.6, delay: 1.2 }
)
gsap.fromTo(
	'#number__3',
	{ y: 20, opacity: 0 },
	{ y: 0, opacity: 1, duration: 0.6, delay: 1.35 }
)
gsap.fromTo(
	'.line_navigation_link',
	{ width: 0 },
	{ width: 20, duration: 0.3, delay: 1.5 }
)

/*!--Анимации секции 1--end--!*/

/*!--Анимации секции 2--start--!*/

gsap.fromTo(
	'.block_2__2',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.block_2__2',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.block_color_2',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.block_color_2',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.block_2__1',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		opacity: 1,
		duration: 0.7,
		scrollTrigger: {
			trigger: '.block_2__1',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'.text_block_2__2',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_block_2__2',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.text_block_2__1',
	{ x: 100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.text_block_2__1',
			start: '200px bottom',
		},
	}
)

/*!--Анимации секции 2--end--!*/

/*!--Анимации секции 3--start--!*/

gsap.fromTo(
	'.name_section_3',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_3',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.underline_title_3',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		delay: 0.2,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_3',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#service__1',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.7,
		opacity: 1,
		scrollTrigger: {
			trigger: '#service__1',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#service__2',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.7,
		opacity: 1,
		delay: 0.2,
		scrollTrigger: {
			trigger: '#service__2',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#service__3',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.7,
		opacity: 1,
		delay: 0.4,
		scrollTrigger: {
			trigger: '#service__3',
			start: '200px bottom',
		},
	}
)

/*!--Анимации секции 3--end--!*/

/*!--Анимации секции 4--start--!*/

gsap.fromTo(
	'.name_section_4',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_4',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.underline_title_4',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		delay: 0.2,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.underline_title_4',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'.links_section_4',
	{ opacity: 0 },
	{
		opacity: 1,
		duration: 0.7,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.underline_title_4',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#work__1',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		scrollTrigger: {
			trigger: '#work__1',
			start: '300px bottom',
		},
	}
)
gsap.fromTo(
	'#work__2',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		scrollTrigger: {
			trigger: '#work__2',
			start: '300px bottom',
		},
	}
)
gsap.fromTo(
	'#work__3',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		scrollTrigger: {
			trigger: '#work__3',
			start: '300px bottom',
		},
	}
)
gsap.fromTo(
	'#work__4',
	{ y: 150, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		scrollTrigger: {
			trigger: '#work__4',
			start: '300px bottom',
		},
	}
)

/*!--Анимации секции 4--end--!*/

/*!--Анимации секции 5--start--!*/

gsap.fromTo(
	'.name_section_5',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.title_section_5',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.underline_title_5',
	{ x: -100, opacity: 0 },
	{
		x: 0,
		duration: 0.8,
		delay: 0.2,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.underline_title_5',
			start: '200px bottom',
		},
	}
)

gsap.fromTo(
	'#creator__1',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		scrollTrigger: {
			trigger: '#creator__1',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#creator__2',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		delay: 0.3,
		scrollTrigger: {
			trigger: '#creator__2',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'#creator__3',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		delay: 0.6,
		scrollTrigger: {
			trigger: '#creator__3',
			start: '200px bottom',
		},
	}
)

/*!--Анимации секции 5--end--!*/

/*!--Анимации секции 6--start--!*/

gsap.fromTo(
	'.content_section_6',
	{ y: 200, opacity: 0 },
	{
		y: 0,
		duration: 1.8,
		opacity: 1,
		ease: 'back',
		scrollTrigger: {
			trigger: '.content_section_6',
			start: '200px bottom',
		},
	}
)

/*!--Анимации секции 6--end--!*/

/*!--Анимации секции 7--start--!*/

gsap.fromTo(
	'.block_7__1',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.block_7__1',
			start: '200px bottom',
		},
	}
)
gsap.fromTo(
	'.block_7__2',
	{ y: 100, opacity: 0 },
	{
		y: 0,
		duration: 0.8,
		opacity: 1,
		ease: 'expo.in',
		scrollTrigger: {
			trigger: '.block_7__2',
			start: '200px bottom',
		},
	}
)

/*!--Анимации секции 7--end--!*/
