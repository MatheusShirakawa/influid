import { Locale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

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
