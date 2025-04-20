import Image from 'next/image'
import Link from 'next/link'

import WhatsappLogo from  '/public/icons/whatsapp-logo.svg'
import MapPin from '/public/icons/map-pin.svg'
import Envelope from '/public/icons/envelope.svg'
import LogoInfluid from '/public/logo-influid.svg'

import Instagram from '/public/icons/instagram.svg'
import Linkedin from '/public/icons/linkedin.svg'
import Whatsapp from '/public/icons/whatsapp.svg'

export default function Footer(){
	return(
		<footer className='footer'>
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
							<Image
								width={16}
								height={16}
								src={Envelope}
								alt='Envelope Icon'
							/>
							<span className='font-bold'>contact@influid.co</span>
						</div>
						<span className='text-[#BACAF5] block opacity-40'>Check our social media</span>
						<div>
							<ul className='flex flex-row gap-4'>
								<li>
									<Link href={''}>
										<Image
											width={16}
											height={16}
											src={Instagram}
											alt='Instagram icon'
										/>
									</Link>
								</li>
								<li>
									<Link href={''}>
										<Image
											width={16}
											height={16}
											src={Linkedin}
											alt='Linkedin icon'
										/>
									</Link>
								</li>
								<li>
									<Link href={''}>
										<Image
											width={16}
											height={16}
											src={Whatsapp}
											alt='Whatsapp icon'
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='item max-w-[200px] flex flex-col gap-4'>
						<Image
							width={16}
							height={16}
							src={MapPin}
							alt='Map Pin Icon'
						/>
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
							<Image
								width={16}
								height={16}
								src={WhatsappLogo}
								alt='Whatsapp Logo'
							/>
							<span className='text-[#BACAF5]'>+1 (224) 742 0208</span>
						</div>
					</div>

					<div className='item max-w-[200px] flex flex-col gap-4'>
						<Image
							width={16}
							height={16}
							src={MapPin}
							alt='Map Pin Icon'
						/>
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
							<Image
								width={16}
								height={16}
								src={WhatsappLogo}
								alt='Whatsapp Logo'
							/>
							<span className='text-[#BACAF5]'>+55 (11) 96313 0862</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
