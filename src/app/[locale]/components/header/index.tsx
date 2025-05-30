/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useTransition} from 'react'
import { usePathname, useRouter} from '@/i18n/navigation'
import { scrollDown } from '../../utils/helpers'

import Link from 'next/link'


export default function Header({ locale }: { locale: string | undefined }) {
	const router = useRouter()
	const [showHeader, setShowHeader] = useState(false)
	const [isPending, startTransition] = useTransition()
	const [showMenu, setShowMenu] = useState(false)
	const pathname = usePathname()
	// const params = useParams()
	const t = useTranslations('Header')

	useEffect(() => {
		setTimeout(() => {
			setShowHeader(true)
		},3000)
	},[])

	function handleChangeLanguage(e: React.ChangeEvent<HTMLInputElement>){
		const { checked } = e.target
		if (checked) {
			startTransition(() => {
				router.replace( { pathname }, { locale: 'en'})
			})
		}
		else {
			startTransition(() => {
				router.replace(  { pathname },  { locale: 'pt'})
			})
		}
	}

	return(
		<header id="header" className="header">
			<div className="header-content flex justify-between items-center relative mx-auto max-w-[1388px]" data-show={showHeader}>

				<div className='menu-mobile' data-active={showMenu} onClick={() => setShowMenu(!showMenu)}>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</div>
				<div className='logo-mobile'>
					<Link href={'#'} >
						<img
							width={46}
							height={48}
							src={'/logo.svg'}
							alt='Influid Logo'
						/>
					</Link>
				</div>
				<nav data-active={showMenu}>
					<ul>
						<li>
							<a onClick={() => scrollDown('about-us')}>
								{t('about')}
							</a>
						</li>
						<li>
							<a onClick={() => scrollDown('our-projects')}>
								{t('projects')}
							</a>
						</li>
						<li className='logo'>
							<Link href={'#'} >
								<img
									width={46}
									height={48}
									src={'/logo.svg'}
									alt='Influid Logo'
								/>
							</Link>
						</li>
						<li>
							<a onClick={() => scrollDown('parallax')}>
								{t('services')}
							</a>
						</li>
						<li>
							<a onClick={() => scrollDown('contact')}>
								{t('contact')}
							</a>
						</li>
					</ul>
				</nav>

				<div className='change-lang' data-pending={isPending}>
					<div className="toggle" data-on={'EN'} data-off={'PT'}>
						<input type="checkbox" checked={locale == 'en' ? true : false } onChange={(e) => handleChangeLanguage(e)}/>
						<label data-on={'EN'} data-off={'PT'}></label>
					</div>
				</div>
			</div>
		</header>
	)
}
