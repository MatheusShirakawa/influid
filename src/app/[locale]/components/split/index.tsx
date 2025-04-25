"use client"

import { scrollDown } from "../../utils/helpers"
import { ArrowDown } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

export default function Split() {
	const t = useTranslations('Split')
	return(
		<div id="split" className='split relative z-10'>
			<div className='content-split flex justify-center relative items-start'>
				<div className='left w-[55%] px-14'>
					<div className='line-numbers flex flex-row justify-between'>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#00FF99] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>10</span>
							</div>
							<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>{t("years")}</p>
						</div>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#1890FF] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>100</span>
							</div>
							<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>{t("customers")}</p>
						</div>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#03F2F2] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>80</span>
							</div>
							<p className='text-xs !text-[#BACAF5] max-w-[80px] text-right '>{t("brands")}</p>
						</div>
					</div>
				</div>

				<div className='right w-[45%] px-14 text-base mt-6'>
					<p><strong>Influid</strong> {t("description")}</p>
				</div>
			</div>

			<div className='content-split flex flex-row justify-center items-start'>
				<div className='left w-[55%] pr-14 relative'>
					<span className='number-absolute'>02</span>
					<h2 className='title text-[64px] font-bold leading-tight text-right'>
						<span className="text-[#0060FF] block">{t("info-one")}</span>
						<span className='text-white block'>{t("info-two")}</span>
						<span className='text-white'>{t("info-three")}</span> <span className='text-[#0060FF]'>.</span>
					</h2>
				</div>
				<div className='right w-[45%] pl-14 text-base mt-6'>
					<p>{t("solutions")}</p>
					<a onClick={() => scrollDown('our-projects')} className='items-center text-center flex flex-row gap-2 text-[#0060FF] cursor-pointer border border-[#0060FF] rounded-lg font-bold text-base leading-16 h-16 justify-center max-w-[222px] hover:bg-[#0060FF] hover:text-white ease-in-out duration-300 mt-6'>
						<span>{t("see-our-projects")}</span>
						<ArrowDown className="w-5 h-5 font-bold"/>
					</a>
				</div>
			</div>
		</div>
	)
}
