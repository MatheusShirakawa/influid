"use client"

import Typewriter from "../typewriter"

import {
	ArrowDown
} from '@phosphor-icons/react'
import { scrollDown } from "../../utils/helpers"
import { useTranslations } from "next-intl"

export default function FirstContent(){
	const t = useTranslations('FirstContent')
	const split = useTranslations('Split')

	const strings = [
		t("strings.websites"),
		t("strings.apps"),
		t("strings.brands"),
		t("strings.systems"),
		t("strings.experiences")
	]

	return(
		<div className='first-content-page'>
			<div className="line-absolute"></div>
			<span className='design-mini-title'>
				influid design studio
			</span>

			<h1 className="title">
				<span className='number-absolute'>01</span>
				<span className='text-[#00ff99] block relative z-[2]'>{t("title")}</span>
				<div className='mt-[-40px] flex justify-center flex-row items-end'>
					<div className="dinamic-texts text-center text-white">
						<Typewriter toRotate={strings} period={1000} />
					</div>
					<span className='text-[#00ff99]'>.</span>
				</div>
			</h1>

			<div className="mobile-text">
				<p><strong>Influid</strong> {split("description")}</p>

				<a href="#" onClick={() => scrollDown('our-projects')} className="projects-link">
					{split("see-our-projects")}
					<ArrowDown/>
				</a>

			</div>

			<div className='block-scroll-down mx-auto'>
				<a onClick={() => scrollDown('split')} className='scroll-down'>
					<ArrowDown className="w-5 h-5"/>
				</a>
			</div>
		</div>
	)
}
