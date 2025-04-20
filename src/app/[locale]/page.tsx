/* eslint-disable react/no-unescaped-entities */
import { Locale } from 'next-intl'
import Link from 'next/link'
// import { Locale, useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { use } from 'react'

import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'
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
			<main>
				<Header/>
				<div className='main-content'>

					<div className='first-content-page'>
						<span className='rounded-full border border-[#1890ff] max-w-[209px] mx-auto text-[#1890ff] text-center px-6 py-[5px] block'>
							influid design studio
						</span>

						<h1 className='justify-center items-center text-center text-[128px] leading-normal font-bold'>
							<span className='text-[#00ff99] block'>we design great</span>
							<div className='mt-[-54px]'>
								<span className='text-[#fff]'>websites</span><span className='text-[#00ff99]'>.</span>
							</div>
						</h1>

						<div className='mx-auto'>
							<Link href={''} className='rounded-full bg-[#0060FF] cursor-pointer flex justify-center items-center w-[36px] h-[36px] mx-auto mt-[80px] mb-[150px]'>
								<Image
									className='block'
									src={ArrowDown}
									width={16}
									height={16}
									alt='Arrow down icon'
								/>
							</Link>
						</div>
					</div>

					<div className='split'>
						<div className='content-split flex justify-center relative items-start'>
							<div className='left w-[55%] px-14'>
								<div className='line-numbers flex flex-row justify-between'>
									<div className='line'>
										<div className='flex flex-row gap-2 font-bold'>
											<span className='plus text-[#00FF99] text-2xl mt-4'>+</span>
											<span className='number text-[54px]'>10</span>
										</div>
										<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>years creating amazing digital experiencies</p>
									</div>
									<div className='line'>
										<div className='flex flex-row gap-2 font-bold'>
											<span className='plus text-[#1890FF] text-2xl mt-4'>+</span>
											<span className='number text-[54px]'>100</span>
										</div>
										<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>customers from different markets and countries</p>
									</div>
									<div className='line'>
										<div className='flex flex-row gap-2 font-bold'>
											<span className='plus text-[#03F2F2] text-2xl mt-4'>+</span>
											<span className='number text-[54px]'>80</span>
										</div>
										<p className='text-xs text-[#BACAF5] max-w-[80px] text-right'>full brands great projects developed</p>
									</div>
								</div>
							</div>

							<div className='right w-[45%] px-14 text-base mt-6'>
								<p><strong>Influid</strong> is a digital design studio focused on creating websites, apps, systems, and interactive experiences that really flow.</p>
							</div>
						</div>

						<div className='content-split flex flex-row justify-center items-start'>
							<div className='left w-[55%] pr-14'>
								{/* 02 */}
								<h2 className='title text-[64px] font-bold leading-tight text-right'>
									<span className="text-[#0060FF] block">we create</span>
									<span className='text-white block'>interaction, fluity</span>
									<span className='text-white'>and identity</span> <span className='text-[#0060FF]'>.</span>
								</h2>
							</div>
							<div className='right w-[45%] pl-14 text-base mt-6'>
								<p>We develop unique solutions for each project we deliver, but at the same, we have a quality standard we always ensure. That's our signature.</p>
								<Link href={''} className='items-center flex flex-row gap-2'>
									<span>see our projects</span>
									<Image
										width={16}
										height={16}
										src={ArrowDownBlue}
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
