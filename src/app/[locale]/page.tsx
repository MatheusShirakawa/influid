import { Locale } from 'next-intl'
// import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

// import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'
// import ArrowDownBlue from 'public/icons/arrow-down-blue.svg'

import Hero from './components/hero'
import Footer from './components/footer'
import Contact from './components/contact'
import OurClients from './components/our-clients'
import Parallax from './components/parallax'
import OurProjects from './components/our-projects'
import WhatWeAre from './components/what-we-are'


type Props = {
	params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
	const { locale } = use(params)

	// Enable static rendering
	setRequestLocale(locale)

	const initial 		= { opacity:0, y:100 }
	const whileInView 	= { opacity:1, y:0 }
	const transition 	= { duration:1, ease:"easeOut" }
	const viewport 		= { once:true }

	return (
		<div className="bg-[#020717]">
			<main>
				<Hero
					initial={initial}
					whileInView={whileInView}
					transition={transition}
					viewport={viewport}
				/>

				<WhatWeAre
					initial={initial}
					whileInView={whileInView}
					transition={transition}
					viewport={viewport}
				/>

				<OurProjects
					locale={locale}
					initial={initial}
					whileInView={whileInView}
					transition={transition}
					viewport={viewport}
				/>

				<div id="parallax" className='parallax'>
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
