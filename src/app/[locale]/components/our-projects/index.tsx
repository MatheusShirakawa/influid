"use client"

import Banner from "../banner"

import { motion } from "framer-motion"
import { TargetAndTransition, VariantLabels } from 'framer-motion';

import { ArrowDown } from "@phosphor-icons/react"
import { useTranslations } from "next-intl"

import { A11y, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ArrowRight, ArrowLeft } from "@phosphor-icons/react"
import { scrollDown } from "../../utils/helpers"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'


// import { useCallback, useRef } from "react"

interface OurProjectsProps {
	locale?: string | undefined;
	initial?: TargetAndTransition | undefined;
	whileInView?: TargetAndTransition | VariantLabels | undefined;
	transition?: TargetAndTransition | undefined;
	viewport?: object | undefined;
}

export default function OurProjects(props: OurProjectsProps) {

	const t = useTranslations('OurProjects')

	return(

		<motion.div
			id="our-projects"
			className="our-projects relative z-[1]"
			initial={props.initial}
			whileInView={props.whileInView}
			transition={props.transition}
			viewport={props.viewport}
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
						// modules={[A11y, Navigation]}
						spaceBetween={24}
						slidesPerView={4}
						autoplay={{ delay: 2500, disableOnInteraction: true }}
						loop={true}
						navigation={{
							nextEl: '.arrow-right',
							prevEl: '.arrow-left',
						}}
						// navigation={true}
						// pagination={{ clickable: true }}
						centeredSlides={false}>
							<SwiperSlide>
								<Banner
									src={'/iphone1.png'}
									name='Project 1'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app','genAI']}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/iphone2.png'}
									name='Project 2'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'B2B', 'genAI']}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/iphone3.png'}
									name='Project 3'
									infoTop={['en-us']}
									infoBottom={['app', 'web app', 'B2B', 'genAI']}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/iphone2.png'}
									name='Project 2'
									infoTop={['pt-br']}
									infoBottom={['app', 'web app']}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/iphone1.png'}
									name='Project 2'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app', 'B2B']}
								/>
							</SwiperSlide>
							<SwiperSlide>
								<Banner
									src={'/iphone3.png'}
									name='Project 3'
									infoTop={['en-us', 'pt-br']}
									infoBottom={['app', 'web app', 'B2B', 'genAI']}
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
					<a onClick={() => scrollDown('contact')} className="custom-hover">
						<span>{t("develop.link")}</span>
						<ArrowDown className="w-5 h-5"/>
					</a>
				</div>
				<div className='right'>
					<p>{t("develop.description")}</p>
				</div>
			</div>
		</motion.div>
	)
}
