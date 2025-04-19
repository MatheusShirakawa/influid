/* eslint-disable react/no-unescaped-entities */
import { Locale } from 'next-intl'
import Link from 'next/link'
// import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { use } from 'react'

import ArrowDown from '/public/icons/arrow-down.svg'

import Header from './components/header'
import Footer from './components/footer'

type Props = {
	params: Promise<{ locale: Locale }>
}

export default function Home({ params }: Props) {
	const { locale } = use(params)

	// Enable static rendering
	setRequestLocale(locale)

	// const t = useTranslations('Home')
	{/* {t("title")}
	{t("description")} */}
	return (
		<div className="bg-gray-800">
			<Header/>
			<main>
				<div className='main-content'>
					<span>influid design studio</span>

					<h1>
						<span>we design great</span>
						<span>websites.</span>
					</h1>

					<div className='split'>
						<div className='content-split'>
							<div className='left'>
								<div className='line-numbers'>
									<div className='line'>
										<div>
											<span className='plus'>+</span><span className='number'>10</span>
										</div>
										<p>years creating amazing digital experiencies</p>
									</div>
									<div className='line'>
										<div>
											<span className='plus'>+</span><span className='number'>100</span>
										</div>
										<p>customers from different markets and countries</p>
									</div>
									<div className='line'>
										<div>
											<span className='plus'>+</span><span className='number'>80</span>
										</div>
										<p>full brands great projects developed</p>
									</div>
								</div>
							</div>

							<div className='right'>
								<p><strong>Influid</strong> is a digital design studio focused on creating websites, apps, systems, and interactive experiences that really flow.</p>
							</div>
						</div>

						<div className='content-split'>
							<div className='left'>
								02
								we create interaction, fluity and identity.
							</div>
							<div className='right'>
								<p>We develop unique solutions for each project we deliver, but at the same, we have a quality standard we always ensure. That's our signature.</p>
								<Link href={''} className='items-center flex flex-row gap-2'>
									<span>see our projects</span>
									<Image
										width={16}
										height={16}
										src={ArrowDown}
										alt='Arrow right icon'
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>

			<div className='what-is'>
				<div className='first'>
					01
					All digital products are made to provide an interaction between users and information, making possible the accomplishment of the users wishes or needs through the company` services or products.
				</div>

				<div className='second'>
					02
					This connection must have a good fluity, it should happen smoothly, because the main goal of a digital experience is always to make the users life easier and happier.
				</div>
				<div className='third'>
					03
					And all this process must represent your identity. Your digital product should have your fingerprint, to promote an affectual relation between your public and your brand.
				</div>
			</div>

			<div className='our-projects'>
				<div className='line-info'>
					<span>interaction</span>
					<span>fluity</span>
					<span>identitiy</span>
				</div>

				<h2 className='title'>our projects</h2>

				<div className='line-banners'>
					<div className='banner'>
						{/* image */}
						<div className='info-image'>
							<span>app</span>
							<span>web app</span>
							<span>B2B</span>
							<span>genAI</span>
						</div>
					</div>
				</div>

				<div className='develop'>
					<div className='left'>
						04
						we develop experiencies
						in branding and technology.
						contact us
					</div>
					<div className='right'>
						<p>We craft innovative solutions with creativity and technology. Our services focus on websites, applications, and branding,turning ideas into stunning platforms and powerful identities that inspire, engage, and elevate your business.</p>
					</div>
				</div>
			</div>

			<div className='paralax-block'>
				<div className='item'>
					<div className='left'>
						<span>01</span>
						websites
					</div>
					<div className='right'>
						Custom websites that combine design and functionality to elevate your online presence.We create digital experiences that reflect your brand’s values and mission, ensuring your site is visually appealing and effective in driving engagement and conversions.
					</div>
				</div>
				<div className='item'>
					<div className='left'>
						<span>02</span>
						applications
					</div>
					<div className='right'>
						Intuitive apps designed to enhance user experience and meet your business goals. We develop apps that simplify processes and provide a seamless user experience, making your app an essential tool for your audience.
					</div>
				</div>
				<div className='item'>
					<div className='left'>
						<span>03</span>
						branding
					</div>
					<div className='right'>
						Powerful branding solutions that make your business stand out and build trust.We create strong, consistent brand identities with logos, color palettes, and visual guidelines that communicate your company’s values and establish trust.
					</div>
				</div>
			</div>

			<div className='our-clients'>
				<h2 className='title'>our clients.</h2>
				<div className='list-clients'>

				</div>
			</div>

			<div className='contact'>
				<h2 className='title'>make it flow.</h2>

				<div className='contact-form'>
					<p>Fill the form bellow to send us a message, we will be glad to answer you as soon as possible.</p>
					<form action="">
						<input type="text" placeholder='your name'/>
						<input type="email" placeholder='your best e-mail'/>
						<input type="text" placeholder='text your message'/>
						<button type='submit'>send</button>
					</form>
				</div>
			</div>
			<Footer/>
		</div>
	)
}
