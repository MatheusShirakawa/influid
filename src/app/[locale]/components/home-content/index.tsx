"use client"

import { useRef } from 'react'
import { useState, useEffect } from 'react'

import Hero from '../hero'
import Footer from '../footer'
import Contact from '../contact'
import OurClients from '../our-clients'
import Parallax from '../parallax'
import OurProjects from '../our-projects'
import WhatWeAre from '../what-we-are'
// import LoadingPage from '../loading-page'

export default function HomeContent({ props }: { props: { locale: string } }) {
	const scrollRef = useRef(null)
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

	  window.addEventListener('scroll', handleScroll)

	  return () => {
		window.removeEventListener('scroll', handleScroll)
	  }
	}, [])

	const initial 		= { opacity:0,  y:100 }
	const whileInView 	= { opacity:1,  y:0 }
	const transition 	= { duration:1, ease:"easeOut" }
	const viewport 		= { once:true }

	const triggerHero 		= 0
	const triggerProjects 	= 1600
	const triggerParallax 	= 3500
	const triggerClients 	= 6500
	const triggerFooter 	= 7100

	const dataScrollParallax = (scrollY ?? 0) > triggerParallax && true

	return (
		<main
			ref={scrollRef}
			data-scroll={scrollY}
			data-ref={scrollRef}
			className='relative'
		>
			<Hero
				locale={props.locale}
				initial={initial}
				whileInView={whileInView}
				transition={transition}
				viewport={viewport}
				scrollY={scrollY}
				scrollTrigger={triggerHero}
			/>

			<WhatWeAre
				initial={initial}
				whileInView={whileInView}
				transition={transition}
				viewport={viewport}
			/>

			<OurProjects
				locale={props.locale}
				initial={initial}
				whileInView={whileInView}
				transition={transition}
				viewport={viewport}
				scrollY={scrollY}
				scrollTrigger={triggerProjects}
			/>

			<div id="parallax" className='parallax' data-scroll={dataScrollParallax}>
				<Parallax />
				<div className='bottom'>
					<OurClients
						scrollY={scrollY}
						scrollTrigger={triggerClients}
					/>
					<Contact/>
					<Footer
						scrollY={scrollY}
						scrollTrigger={triggerFooter}
					/>
				</div>
			</div>
		</main>
	)
}
