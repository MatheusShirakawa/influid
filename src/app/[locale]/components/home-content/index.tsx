"use client"

// import { Locale, useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'
// import { useScroll } from 'framer-motion'
// import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'
// import ArrowDownBlue from 'public/icons/arrow-down-blue.svg'

import Hero from '../hero'
import Footer from '../footer'
import Contact from '../contact'
import OurClients from '../our-clients'
import Parallax from '../parallax'
import OurProjects from '../our-projects'
import WhatWeAre from '../what-we-are'
import { useRef } from 'react'


export default function HomeContent({ props }: { props: { locale: string } }) {
	const scrollRef = useRef(null)
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
	  const handleScroll = () => {
		setScrollY(window.scrollY);
	  };

	  window.addEventListener('scroll', handleScroll);

	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);


	const initial 		= { opacity:0, y:100 }
	const whileInView 	= { opacity:1, y:0 }
	const transition 	= { duration:1, ease:"easeOut" }
	const viewport 		= { once:true }
	{console.log(scrollY)}

	return (
		<main ref={scrollRef} data-scroll={scrollY} data-ref={scrollRef} className='relative'>
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
				<Parallax/>
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
