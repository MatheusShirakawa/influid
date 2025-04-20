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

	// const t = useTranslations('Home')
	{/* {t("title")}
	{t("description")} */}
	return (
		<div className="bg-[#020717]">
			<main>
				<Header/>
				<div className='main-content'>
					<FirstContent/>
					<Split/>
				</div>
			</main>

			<WhatWeAre/>
			<OurProjects/>
			<Parallax/>

			<div className='bottom'>
				<OurClients/>
				<Contact/>
				<Footer/>
			</div>
		</div>
	)
}
