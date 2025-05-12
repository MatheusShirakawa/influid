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

export default function HomeContent({ props }: { props: { locale: string } }) {
	const scrollRef = useRef(null)
	// const scrollRefFooter = useRef(null)
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

	const initial 		= { opacity:0, y:100 }
	const whileInView 	= { opacity:1, y:0 }
	const transition 	= { duration:1, ease:"easeOut" }
	const viewport 		= { once:true }

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
			/>

			<div id="parallax" className='parallax' data-scroll={(scrollY ?? 0) > 3500 && true}>
				<Parallax locale={props.locale}/>
				<div className='bottom'>
					<OurClients
						scrollY={scrollY}
					/>
					<Contact/>
					<Footer
						scrollY={scrollY}
					/>
				</div>
			</div>
		</main>
	)
}
