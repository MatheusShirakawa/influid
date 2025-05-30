/* eslint-disable @next/next/no-img-element */
"use client"

import Link from 'next/link'

import {
	WhatsappLogo,
	InstagramLogo,
	Envelope
} from '@phosphor-icons/react'

import { useTranslations } from 'next-intl'
import LinkedinLogo from '../../../../../public/icons/linkedin'
import WhatsappLogoCustom from '../../../../../public/icons/whatsapp'

interface FooterProps {
	scrollY?: number | undefined;
	scrollTrigger?: number | undefined;
	refFooter ?: React.RefObject<HTMLDivElement>;
}

export default function Footer(props:FooterProps){

	const t = useTranslations('Footer')
	const dataScroll = (props.scrollY ?? 0) > (props.scrollTrigger ?? 0) && true

	return(
		<>
			<footer
				id="footer"
				className='footer'
				data-scroll={dataScroll}>
				<div className='container-footer'>
					<div className='footer-content'>
						<div className='item max-w-[220px]'>
							<Link href={''}>
								<img
									width={193}
									height={38}
									src={'/logo-influid.svg'}
									alt='Influid Logo'
								/>
							</Link>
							<p className='text-[#BACAF5] block opacity-40 mt-8'>{t('what-is')}</p>
						</div>

						<div className='item max-w-[290px] flex flex-col gap-2'>
							<span className='text-[#BACAF5] block opacity-40'>{t('social-title')}</span>
							<div>
								<ul className='flex flex-row items-start gap-4'>
									<li>
										<Link target='_blank' href={'https://www.instagram.com/influidstudio/'}>
											<InstagramLogo className="w-6 h-6 text-[#03F2F2] hover:text-[#00FF99] duration-300 ease-in-out"/>
										</Link>
									</li>
									<li>
										<Link target='_blank' href={'https://www.linkedin.com/company/influid-digitalstudio/'}>
											<span className="w-5 h-5 text-[#03F2F2] hover:text-[#00FF99] inline-block duration-300 ease-in-out">
												<LinkedinLogo />
											</span>
										</Link>
									</li>
									<li>
										<Link href={''} className='w-5 h-5'>
											<span className="w-5 h-5 text-[#03F2F2] hover:text-[#00FF99] inline-block duration-300 ease-in-out">
												<WhatsappLogoCustom/>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className='item max-w-[220px] flex flex-col gap-4'>
							<span className='text-[#BACAF5] block opacity-40'>{t('contact-title')}</span>
							<div>
								<Link href={'mailto:contact@influid.co'} className='flex flex-row gap-2 items-center'>
									<Envelope className="w-6 h-6 text-[#00FF99]"/>
									<span className='font-semibold'>contact@influid.co</span>
								</Link>
							</div>
							<div className=''>
								<Link target='_blank'  href={'https://api.whatsapp.com/send/?phone=5514996729660'} className='flex flex-row gap-2 items-center'>
									<WhatsappLogo className="w-5 h-5 text-[#00FF99]"/>
									<span>+55 (14) 99672-9660</span>
								</Link>
							</div>
							<div className=''>
								<Link target='_blank' href={'https://api.whatsapp.com/send/?phone=5511976981894'} className='flex flex-row gap-2 items-center'>
									<WhatsappLogo className="w-5 h-5 text-[#00FF99]"/>
									<span>+55 (11) 97698-1894</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
