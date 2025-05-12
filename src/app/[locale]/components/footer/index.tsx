"use client"

import Image from 'next/image'
import Link from 'next/link'
import LogoInfluid from '/public/logo-influid.svg'

import {
	WhatsappLogo,
	InstagramLogo,
	Envelope
} from '@phosphor-icons/react'

import Linkedin from '/public/icons/linkedin.svg'

import { useTranslations } from 'next-intl'
import { useRef } from 'react'

interface FooterProps {
	scrollY?: number | undefined;
	refFooter ?: React.RefObject<HTMLDivElement>;
}

export default function Footer(props:FooterProps){

	const t = useTranslations('Footer')
	const scrollRefFooter = useRef(null)

	console.log(scrollRefFooter)
	// clientHeight

	// const [scrollPosition, setScrollPosition] = useState({ scrollTop: 0, scrollLeft: 0 });
	// const scrollDemoRef = useRef(null);

	// const handleScroll = () => {
	//   if (scrollDemoRef.current) {
	// 	const { scrollTop, scrollLeft } = scrollDemoRef.current;
	// 	setScrollPosition({ scrollTop, scrollLeft });
	//   }
	// };
	// console.log(scrollPosition)

	return(
		<>
			<footer
				ref={scrollRefFooter}
				id="footer"
				// onScroll={handleScroll}
				className='footer'
				data-scroll={(props.scrollY ?? 0) > 7300 && true}
			>
				<div className='container-footer'>

					<div className='footer-content'>
						<div className='item max-w-[220px]'>
							<Link href={''}>
								<Image
									width={193}
									height={38}
									src={LogoInfluid}
									alt='Influid Logo'
								/>
							</Link>
							<p className='text-[#BACAF5] block opacity-40 mt-8'>{t('what-is')}</p>
						</div>

						<div className='item max-w-[290px] flex flex-col gap-2'>
							<span className='text-[#BACAF5] block opacity-40'>{t('social-title')}</span>
							<div>
								<ul className='flex flex-row gap-4'>
									<li>
										<Link target='_blank' href={'https://www.instagram.com/influidstudio/'}>
											<InstagramLogo className="w-6 h-6 text-[#03F2F2]"/>
										</Link>
									</li>
									<li>
										<Link target='_blank' href={'https://www.linkedin.com/company/influid-digitalstudio/'}>
											{/* <LinkedinLogo className="w-6 h-6 text-[#03F2F2]"/> */}
											<Image
												src={Linkedin}
												alt='Linkedin Logo'
												width={20}
												height={20}
												className="w-5 h-5 text-[#03F2F2]"
											/>
										</Link>
									</li>
									<li>
										<Link href={''}>
											<WhatsappLogo className="w-6 h-6 text-[#03F2F2]"/>
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
