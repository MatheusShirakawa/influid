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
		<footer className='footer flex items-center justify-between'>
			<div className='container'>
				<div className='footer-content'>
					<div className='item'>
						<Link href={''}>
							<Image
								width={193}
								height={38}
								src={LogoInfluid}
								alt='Influid Logo'
							/>
						</Link>
						<p>Influid is a design studio focused on create amazing digital products.</p>
					</div>

					<div className='item'>
						<div>
							<Image
								width={16}
								height={16}
								src={Envelope}
								alt='Envelope Icon'
							/>
							<span>contact@influid.co</span>
						</div>
						<div>
							<span>Check our social media</span>
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

					<div className='item'>
						<div>
							<Image
								width={16}
								height={16}
								src={MapPin}
								alt='Map Pin Icon'
							/>
							<span>US Location 633 West Fifth Street Los Angeles CA90071</span>
						</div>
						<div>
							<Image
								width={16}
								height={16}
								src={WhatsappLogo}
								alt='Whatsapp Logo'
							/>
							<span>+1 (224) 742 0208</span>
						</div>
					</div>

					<div className='item'>
						<div>
							<Image
								width={16}
								height={16}
								src={MapPin}
								alt='Map Pin Icon'
							/>
							<span>BR Location Rua Cayowaá 1742 Perdizes SP 01258010</span>
						</div>
						<div>
							<Image
								width={16}
								height={16}
								src={WhatsappLogo}
								alt='Whatsapp Logo'
							/>
							<span>+55 (11) 96313 0862</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
