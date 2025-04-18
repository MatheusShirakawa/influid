import { Locale, useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';
import Header from './components/header';

type Props = {
	params: Promise<{ locale: Locale }>;
}

export default function Home({ params }: Props) {
	const { locale } = use(params);

	// Enable static rendering
	setRequestLocale(locale);

	const t = useTranslations('Home')

	return (
		<div className="bg-gray-800">
			<main>
				<Header/>
				{t("title")}
				{t("description")}
			</main>
		</div>
	)
}
