"use client"
import Image from 'next/image'
import Link from 'next/link'

import LogoInfluid from '/public/logo-influid.svg'

import {
	WhatsappLogo,
	MapPin,
	InstagramLogo,
	Envelope
} from '@phosphor-icons/react'
import Linkedin from '/public/icons/linkedin.svg'

export default function Footer(){
	return(
		<footer id="footer" className='footer'>
			<div className='container-footer max-w-[1452px] mx-auto px-4'>
				<div className='footer-content flex items-start justify-between'>
					<div className='item max-w-[200px]'>
						<Link href={''}>
							<Image
								width={193}
								height={38}
								src={LogoInfluid}
								alt='Influid Logo'
							/>
						</Link>
						<p className='text-[#BACAF5] block opacity-40 mt-8'>Influid is a design studio focused on create amazing digital products.</p>
					</div>

					<div className='item max-w-[200px] flex flex-col gap-2'>
						<div className='flex flex-row gap-2 items-center text-[#00FF99]'>
							<Envelope className="w-6 h-6"/>
							<span className='font-bold'>contact@influid.co</span>
						</div>
						<span className='text-[#BACAF5] block opacity-40'>Check our social media</span>
						<div>
							<ul className='flex flex-row gap-4'>
								<li>
									<Link href={''}>
										<InstagramLogo className="w-6 h-6 text-[#03F2F2]"/>
									</Link>
								</li>
								<li>
									<Link href={''}>
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

					<div className='item max-w-[200px] flex flex-col gap-4'>
						<MapPin className="w-5 h-5 text-[#00FF99]"/>
						<div>
							<div>
								<p className='text-[#BACAF5] block'>
									<span className='block'>US Location</span>
									<span className='opacity-40'>
										633 West Fifth Street <br/>
										Los Angeles <br/>
										CA90071
									</span>
								</p>
							</div>
						</div>
						<div className='flex flex-row gap-2 items-center'>
							<WhatsappLogo className="w-5 h-5 text-[#00FF99]"/>
							<span className='text-[#BACAF5]'>+1 (224) 742 0208</span>
						</div>
					</div>

					<div className='item max-w-[200px] flex flex-col gap-4'>
						<MapPin className="w-5 h-5 text-[#00FF99]"/>
						<div>
							<p className='text-[#BACAF5] block'>
								<span className='block'>BR Location</span>
								<span className='opacity-40'>
									Rua Cayowaá 1742<br/>
									Perdizes SP<br/>
									01258010
								</span>
							</p>
						</div>
						<div className='flex flex-row gap-2 items-center'>
							<WhatsappLogo className="w-5 h-5 text-[#00FF99]"/>
							<span className='text-[#BACAF5]'>+55 (11) 96313 0862</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
