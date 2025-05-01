import { Locale } from 'next-intl'
// import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'
// import { useScroll } from 'framer-motion'

// import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'
// import ArrowDownBlue from 'public/icons/arrow-down-blue.svg'

// import Hero from './components/hero'
// import Footer from './components/footer'
// import Contact from './components/contact'
// import OurClients from './components/our-clients'
// import Parallax from './components/parallax'
// import OurProjects from './components/our-projects'
// import WhatWeAre from './components/what-we-are'
import HomeContent from './components/home-content'


type Props = {
	params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
	const { locale } = use(params)

	setRequestLocale(locale)

	return (
		<div className="bg-[#020717]">
			<HomeContent props={{ locale }} />
		</div>
	)
}
