

import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Logo from '/public/logo.svg'
import Image from 'next/image'

export default function Header(){
	const t = useTranslations('Header')

	return(
		<header className="header">
			<div className="container">
				<div className="header-content">
					<ul className='flex flex-row items-center gap-4'>
						<li>{t('about')}</li>
						<li>{t('projects')}</li>
						<li className='logo'>
							<Link href={''}>
								<Image
									width={46}
									height={48}
									src={Logo}
									alt='Influid Logo'
								/>
							</Link>
						</li>
						<li>{t('services')}</li>
						<li>{t('contact')}</li>
					</ul>
				</div>
			</div>
		</header>
	)
}
