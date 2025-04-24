// 'use client'

import { Locale } from 'next-intl'
// import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

// import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'
// import ArrowDownBlue from 'public/icons/arrow-down-blue.svg'

import Header from './components/header'
import Footer from './components/footer'
import Contact from './components/contact'
import OurClients from './components/our-clients'
import Parallax from './components/parallax'
import OurProjects from './components/our-projects'
import WhatWeAre from './components/what-we-are'
import Split from './components/split'
import FirstContent from './components/first-content'

type Props = {
	params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
	const { locale } = use(params)

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<div className="bg-[#020717]">
			<main>
				<div className='relative'>
					<video autoPlay muted loop playsInline controls={false} className="absolute bottom-0 left-0 right-0 top-0 z-[0] h-[calc(200dvh)] w-screen object-cover" poster='/video.mp4'>
						<source src="/video.mp4" type='video/mp4'/>
					</video>
					<div className='main-block'>
						<Header locale={locale}/>
						<div className='main-content'>
							<FirstContent/>
							<Split/>
						</div>
					</div>
				</div>

				<WhatWeAre/>
				<OurProjects locale={locale}/>

				<div className='parallax'>
					<Parallax/>
					<div className='bottom'>
						<OurClients/>
						<Contact/>
						<Footer/>
					</div>
				</div>
			</main>
		</div>
	)
}
