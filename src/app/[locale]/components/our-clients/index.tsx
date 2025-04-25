"use client"

import Image from "next/image"
import DbGroup from '/public/icons/brands/db1-group.svg'
import Moderna from '/public/icons/brands/moderna.svg'
import Mol from '/public/icons/brands/mol.svg'
import Poliedro from '/public/icons/brands/poliedro.svg'
import Sm from '/public/icons/brands/sm.svg'
import Stanleys from '/public/icons/brands/stanleys.svg'

import { ArrowRight } from "@phosphor-icons/react"

import { useTranslations } from "next-intl"

import { A11y, Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


export default function OurClients(){

	const t = useTranslations('OurClients')

	return(
		<div className='our-clients'>
			<h2 className='title text-[64px] text-center font-bold text-[#03F2F2]'>
				{t('title-one')} <span className='text-white'>{t('title-two')}</span>.
			</h2>
			<div className='list-clients mt-[100px] flex gap-14 flex-row justify-between items-center'>
				<Swiper
					modules={[Autoplay, A11y, Navigation ]}
					spaceBetween={60}
					slidesPerView={6}
					autoplay={{ delay: 2500, disableOnInteraction: true }}
					loop={true}
					navigation={{
						nextEl: '.arrow-right-client',
					}}
					// navigation={true}
					// pagination={{ clickable: true }}
					centeredSlides={false}>
						<SwiperSlide>
							<Image
								width={200}
								height={60}
								src={DbGroup}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={70}
								src={Moderna}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={70}
								src={Poliedro}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={60}
								src={Mol}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={100}
								height={100}
								src={Sm}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={156}
								height={35}
								src={Stanleys}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={70}
								src={Moderna}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={70}
								src={Poliedro}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={200}
								height={70}
								src={Mol}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={100}
								height={100}
								src={Sm}
								alt=''
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								width={156}
								height={60}
								src={Stanleys}
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
