"use client"

import Banner from "../banner"

import { motion } from "framer-motion"
import { TargetAndTransition, VariantLabels } from 'framer-motion'
import { ArrowDown } from "@phosphor-icons/react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { A11y, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react"
import { scrollDown } from "../../utils/helpers"
import { ProjectContent } from "../../utils/projects"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

interface OurProjectsProps {
	locale?: string | undefined;
	initial?: TargetAndTransition | undefined;
	whileInView?: TargetAndTransition | VariantLabels | undefined;
	transition?: TargetAndTransition | undefined;
	viewport?: object | undefined;
	scrollY?: number | undefined;
	scrollTrigger?: number | undefined;
}

interface ArrayImages {
	img: string;
	name: string;
	infoTop: string[];
	infoBottom: string[]
}

export default function OurProjects(props: OurProjectsProps) {

	const t = useTranslations('OurProjects')

	const [showPopup, setShowPopup] = useState(false)
	const [arrayImages, setArrayImages] = useState<ArrayImages[]>([])

	const handleClick = (array: Array<ArrayImages>) => {
		setShowPopup(!showPopup)
		setArrayImages(array)
	}

	const dataScroll = (props.scrollY ?? 0) > (props.scrollTrigger ?? 0) && true

	const { arrayOne, arrayTwo, arrayThree, arrayFour, arrayFive } = ProjectContent

	return(
		<motion.div
			id="our-projects"
			className="our-projects"
			initial={props.initial}
			whileInView={props.whileInView}
			transition={props.transition}
			viewport={props.viewport}
			data-scroll={dataScroll}
		>
			<div className="content-slide">
				<div className='line-info'>
					<span>{t("projects.info-one")}</span>
					<span>{t("projects.info-two")}</span>
					<span>{t("projects.info-three")}</span>
				</div>

				<span className="number-absolute">03</span>
				<h2 className='title' data-language={props.locale}>{t("projects.title")}</h2>

				<div className="arrow-right-content">
					<div className="arrows">
						<div className="arrow-left">
							<ArrowLeft className="w-5 h-5"/>
						</div>
						<div className="arrow-right">
							<ArrowRight className="w-5 h-5"/>
						</div>
					</div>
				</div>

				<div className='line-banners'>
					<Swiper
						modules={[A11y, Autoplay, Navigation]}
						spaceBetween={24}
						slidesPerView={4}
						autoplay={{ delay: 2500, disableOnInteraction: true }}
						loop={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 20,
								centeredSlides:true,
							},
							320: {
								slidesPerView: 1,
								spaceBetween: 20,
								centeredSlides:true,
							},
							768: {
							  slidesPerView: 2,
							  spaceBetween: 40,
							},
							1024: {
							  slidesPerView: 3,
							  spaceBetween: 24,
							},
							1400: {
							  slidesPerView: 4,
							  spaceBetween: 24,
							},
						}}
						navigation={{
							nextEl: '.arrow-right',
							prevEl: '.arrow-left',
						}}
						centeredSlides={false}>
							<SwiperSlide>
								<Banner
									src={'/projects/overmind/01.png'}
									name='Overmind'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app', 'B2B']}
									infoTexts={t("desc-one")}
									handleClick={handleClick}
									arrayImgs={arrayOne}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/projects/read-market/01.png'}
									name='Read.Market'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app']}
									infoTexts={t("desc-two")}
									handleClick={handleClick}
									arrayImgs={arrayTwo}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/projects/draft-team/01.png'}
									name='DraftTeam'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app']}
									infoTexts={t("desc-three")}
									handleClick={handleClick}
									arrayImgs={arrayThree}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/projects/unite/01.png'}
									name='Unite'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app']}
									infoTexts={t("desc-four")}
									handleClick={handleClick}
									arrayImgs={arrayFour}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/projects/bolanos-commercial/01.png'}
									name='Bolanos Commercial Enterprise'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app']}
									infoTexts={t("desc-five")}
									handleClick={handleClick}
									arrayImgs={arrayFive}
								/>
							</SwiperSlide>
					</Swiper>
				</div>
			</div>

			<div className='develop'>
				<div className='left relative'>
					<span className="number-absolute">04</span>
					<h2 className="title relative z-[1]">
						{t("develop.title-one")} <br/>
						<span>{t("develop.title-two")}</span>.
					</h2>
					<a onClick={() => scrollDown('contact')} className="custom-hover desktop">
						<span>{t("develop.link")}</span>
						<ArrowDown className="w-5 h-5"/>
					</a>
				</div>
				<div className='right'>
					<p>{t("develop.description")}</p>
					<a onClick={() => scrollDown('contact')} className="custom-hover mobile">
						<span>{t("develop.link")}</span>
						<ArrowDown className="w-5 h-5"/>
					</a>
				</div>
			</div>
			<div data-show={showPopup} className="popup">
				<div>
					<Swiper
						modules={[A11y, Autoplay]}
						spaceBetween={24}
						breakpoints={{
							0: {
								slidesPerView: 1,
								spaceBetween: 20,
								centeredSlides:true,
							},
							320: {
								slidesPerView: 1,
								spaceBetween: 20,
								centeredSlides:true,
							},
							768: {
							  slidesPerView: 2,
							  spaceBetween: 40,
							  centeredSlides:true,
							},
							1024: {
							  slidesPerView: 3,
							  spaceBetween: 24,
							},
							1400: {
							  slidesPerView: 4,
							  spaceBetween: 24,
							},
						}}
						slidesPerView={4}
						autoplay={{ delay: 2500, disableOnInteraction: true }}
						loop={true}
						centeredSlides={false}>
							{arrayImages.map((item, index) => (
								<SwiperSlide key={index}>
									<Banner
										src={item.img}
										name={item.name}
										infoTop={item.infoTop}
										infoBottom={item.infoBottom}
										hasInfoTexts={false}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
			<div className="shadow" onClick={() => setShowPopup(false)}></div>
		</motion.div>
	)
}
