const menuItems = document.querySelectorAll('a')
const scrollSpySections = document.querySelectorAll('.scrollspy')
const navMobile = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.hamburger');
const allNavLinks = document.querySelectorAll('.nav__link')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

        scrollSpySections.forEach(section => {

			if(window.scrollY <= section.offsetTop + section.offsetHeight) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)


				menuItems.forEach(item => item.classList.remove('active'))

				activeSection.classList.add('active')
			}
			
			if ( window.innerHeight + window.scrollY >= document.body.offsetHeight ) {
                const lastSection = document.querySelector('a:last-of-type')

                menuItems.forEach(item => item.classList.remove('active'))

                lastSection.classList.add('active')
            }
		})
	}
}



const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav__mobile__active');


	allNavLinks.forEach(link => {
		link.addEventListener('click', () => {
            navMobile.classList.remove('nav__mobile__active')
	})
} )}



navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleScrollSpy);