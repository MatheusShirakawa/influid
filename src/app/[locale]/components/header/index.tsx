import { useTranslations } from 'next-intl'

export default function Header(){
	const t = useTranslations('Header')

	return(
		<header className="header">
			<div className="container">
				<div className="header-content">
					<ul>
						<li>{t('about')}</li>
						<li>{t('projects')}</li>
						<li>{t('services')}</li>
						<li>{t('contact')}</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
