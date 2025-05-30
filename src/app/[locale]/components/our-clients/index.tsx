/* eslint-disable @next/next/no-img-element */
"use client"

import { ArrowRight } from "@phosphor-icons/react"
import { useTranslations } from "next-intl"
import { A11y, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

interface OurClientsProps {
	scrollY?: number | undefined;
	scrollTrigger?: number | undefined;
}

export default function OurClients(props:OurClientsProps){

	const t = useTranslations('OurClients')
	const dataScroll = (props.scrollY ?? 0) > (props.scrollTrigger ?? 0) && true

	return(
		<div className='our-clients' data-scroll={dataScroll}>
			<h2 className='title'>
				{t('title-one')} <span className='text-white'>{t('title-two')}</span>.
			</h2>
			<div className='list-clients'>
				<Swiper
					modules={[Autoplay, A11y, Navigation ]}
					spaceBetween={60}
					slidesPerView={6}
					breakpoints={{
						320: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						450: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						640: {
						  slidesPerView: 3,
						  spaceBetween: 30,
						},
						768: {
						  slidesPerView: 4,
						  spaceBetween: 40,
						},
						1024: {
						  slidesPerView: 6,
						  spaceBetween: 60,
						},
					  }}
					autoplay={{ delay: 2500, disableOnInteraction: true }}
					loop={true}
					navigation={{
						nextEl: '.arrow-right-client',
					}}
					// navigation={true}
					// pagination={{ clickable: true }}
					centeredSlides={false}>
						<SwiperSlide>
							<img
								width={200}
								height={60}
								src={'/icons/brands/db1-group.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={70}
								src={'/icons/brands/moderna.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={70}
								src={'/icons/brands/poliedro.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={60}
								src={'/icons/brands/mol.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={100}
								height={100}
								src={'/icons/brands/sm.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={156}
								height={35}
								src={'/icons/brands/stanleys.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={70}
								src={'/icons/brands/moderna.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={70}
								src={'/icons/brands/poliedro.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={200}
								height={70}
								src={'/icons/brands/mol.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={100}
								height={100}
								src={'/icons/brands/sm.svg'}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								width={156}
								height={60}
								src={'/icons/brands/stanleys.svg'}
								alt=''
							/>
						</SwiperSlide>
				</Swiper>
			</div>
			<div className="block-arrow-right-client">
				<div className="arrow-right-client">
					<ArrowRight className=" text-white w-5 h-5"/>
				</div>
			</div>
		</div>
	)
}
