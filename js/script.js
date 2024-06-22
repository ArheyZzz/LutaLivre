const swiper = new Swiper('.mySwiper', {
	// spaceBetween: 30,
	// effect: 'fade',
	speed: 1500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
	loop: true,
	autoplay: {
		delay: 2500,
	},
})

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.hero-nav')
const menuLinks = document.querySelectorAll('.menu-link-item')
const menuMobileLinks = document.querySelectorAll('.hero-nav-link-item')

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active')
	navMenu.classList.toggle('nav-active')
})

function ScrollTo(links) {
	links.forEach(link => {
		link.addEventListener('click', function () {
			const target = document.getElementById(link.getAttribute('data-link'))
			target.scrollIntoView({ behavior: 'smooth' })
			hamburger.classList.toggle('hamburger-active')
			navMenu.classList.toggle('nav-active')
		})
	})
}

ScrollTo(menuLinks)
ScrollTo(menuMobileLinks)

new WOW().init()
