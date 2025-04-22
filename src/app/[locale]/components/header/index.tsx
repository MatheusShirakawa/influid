'use client'

// import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import Logo from '/public/logo.svg'
import Image from 'next/image'

export default function Header(){

	// const [language, setLanguage] = useState('en')
	const t = useTranslations('Header')

	return(
		<header className="header pt-[47px]">
			<div className="header-content relative mx-auto">
				<ul className='flex flex-row justify-center items-center gap-[71px] text-[#03f2f2]'>
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

				{/* <div className='change-lang'> */}
					{/* language */}
					{/* setLanguage('EN') */}
					{/* EN/PT */}
				{/* </div> */}
			</div>
		</header>
	)
}
