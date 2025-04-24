"use client"

import Link from "next/link"
import Banner from "../banner"

import { ArrowDown } from "@phosphor-icons/react"
import { useTranslations } from "next-intl"

export default function OurProjects({ locale }: { locale: string }) {

	const t = useTranslations('OurProjects')

	return(
		<div id="our-projects" className='our-projects'>
			<div className="content-slide">
				<div className='line-info'>
					<span>{t("projects.info-one")}</span>
					<span>{t("projects.info-two")}</span>
					<span>{t("projects.info-three")}</span>
				</div>

				<span className="number-absolute">03</span>
				<h2 className='title' data-language={locale}>{t("projects.title")}</h2>

				<div className='line-banners'>
					<Banner
						src={'/iphone1.png'}
						name='Project 1'
					/>
					<Banner
						src={'/iphone2.png'}
						name='Project 2'
					/>
					<Banner
						src={'/iphone3.png'}
						name='Project 3'
					/>
					<Banner
						src={'/iphone1.png'}
						name='Project 1'
					/>
				</div>
			</div>

			<div className='develop'>
				<div className='left relative'>
					<span className="number-absolute">04</span>
					<h2 className="title relative z-10">
						{t("develop.title-one")} <br/>
						<span>{t("develop.title-two")}</span>.
					</h2>
					<Link href={''} className="">
						<span>{t("develop.link")}</span>
						<ArrowDown className="w-5 h-5"/>
					</Link>
				</div>
				<div className='right'>
					<p>{t("develop.description")}</p>
				</div>
			</div>
		</div>
	)
}
