import { notFound } from 'next/navigation'
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ReactNode } from 'react'
import { routing } from '@/i18n/routing'
import './globals.css'

type Props = {
	children: ReactNode
	params: Promise<{ locale: Locale }>
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata(props: Omit<Props, 'children'>) {
	const { locale } = await props.params

	const t = await getTranslations({ locale, namespace: 'Layout' })

	return {
		title: t('title')
	}
}

export default async function Layout({ children, params }: Props) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<html className="h-full" lang={locale}>
			<body>
				<NextIntlClientProvider>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
