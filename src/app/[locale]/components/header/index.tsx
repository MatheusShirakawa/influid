'use client'

import { useTranslations } from 'next-intl'
import { useTransition} from 'react'
import { usePathname, useRouter} from '@/i18n/navigation'
// import { useParams } from 'next/navigation'
// import { Locale } from 'next-intl'

import Link from 'next/link'
import Logo from '/public/logo.svg'
import Image from 'next/image'

export default function Header({ locale }: { locale: string }) {

	const router = useRouter()
	const [isPending, startTransition] = useTransition()
	const pathname = usePathname()
	// const params = useParams()
	const t = useTranslations('Header')


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
		<header className="header pt-[47px]">
			<div className="header-content relative mx-auto max-w-[1388px]">
				<nav>
					<ul className='flex flex-row justify-center items-center gap-[71px]'>
						<li>
							<Link href={'#'}>
								{t('about')}
							</Link>
						</li>
						<li>
							<Link href={'#'}>
								{t('projects')}
							</Link>
						</li>
						<li className='logo'>
							<Link href={'#'} >
								<Image
									width={46}
									height={48}
									src={Logo}
									alt='Influid Logo'
								/>
							</Link>
						</li>
						<li>
							<Link href={'#'}>
								{t('services')}
							</Link>
						</li>
						<li>
							<Link href={'#'}>
								{t('contact')}
							</Link>
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
