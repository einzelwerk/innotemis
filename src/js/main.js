import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Pagination],
		loop: false,
		slidesPerView: 1,
		centeredSlides: false,
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction'
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	})

	const body = document.querySelector('body')
	const menuButton = document.querySelector('.menu__button')
	const menuList = document.querySelector('.menu__list')

	if (body && menuButton && menuList) {
		const openMenu = () => {
			body.classList.add('menu-open')
			menuButton.classList.add('active')
		}

		const closeMenu = () => {
			body.classList.remove('menu-open')
			menuButton.classList.remove('active')
		}

		const toggleMenu = e => {
			e.stopPropagation()
			body.classList.contains('menu-open') ? closeMenu() : openMenu()
		}

		menuButton.addEventListener('click', toggleMenu)

		document.addEventListener('click', e => {
			if (
				body.classList.contains('menu-open') &&
				!menuList.contains(e.target) &&
				!menuButton.contains(e.target)
			) {
				closeMenu()
			}
		})

		document.addEventListener('keydown', e => {
			if (e.key === 'Escape' && body.classList.contains('menu-open')) {
				closeMenu()
			}
		})
	}

	const element = document.querySelector('.header__container-wide')

	window.addEventListener('scroll', () => {
		const scrollY = window.scrollY
		const maxScroll = 100
		const progress = Math.min(scrollY / maxScroll, 1)

		const scaleX = 1 - (16 / element.offsetWidth) * progress
		const translateY = 8 * progress

		element.style.transform = `translateY(${translateY}px) scaleX(${scaleX})`

		element.style.backgroundColor = `rgba(255, 255, 255, ${progress})`
		element.style.borderColor = `rgba(217, 221, 228, ${progress})`
		element.style.borderRadius = `24px`
	})
})
