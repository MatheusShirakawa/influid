"use client"

import { scrollDown } from "../../utils/helpers"
import { ArrowDown } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

export default function Split() {
	const t = useTranslations('Split')
	return(
		<div id="split" className='split'>
			<div className='content-split'>
				<div className='left'>
					<div className='line-numbers'>
						<div className='line'>
							<div className='content-number'>
								<span className='plus text-[#00FF99] text-2xl mt-4'>+</span>
								<span
									className='counter number text-[54px] text-white'
									style={{ '--from':6, '--to': 10, '--time': '6s' } as React.CSSProperties}>
								</span>
							</div>
							<p>{t("years")}</p>
						</div>
						<div className='line'>
							<div className='content-number'>
								<span className='plus text-[#1890FF] text-2xl mt-4'>+</span>
								<span
									className='counter number text-[54px] text-white'
									style={{ '--from': 70, '--to': 100, '--time': '6s' } as React.CSSProperties}>
								</span>
							</div>
							<p>{t("customers")}</p>
						</div>
						<div className='line'>
							<div className='content-number'>
								<span className='plus text-[#03F2F2] text-2xl mt-4'>+</span>
								<span
									className='counter number text-[54px] text-white'
									style={{ '--from': 50, '--to': 80, '--time': '6s' } as React.CSSProperties}>
								</span>
							</div>
							<p>{t("brands")}</p>
						</div>
					</div>
				</div>

				<div className='right'>
					<p><strong>Influid</strong> {t("description")}</p>
				</div>
			</div>

			<div className='content-split-last'>
				<div className='left'>
					<span className='number-absolute'>02</span>
					<h2 className='title text-[64px] font-bold leading-tight text-right'>
						<span className="text-[#0060FF] block">{t("info-one")}</span>
						<span className='text-white block'>{t("info-two")}</span>
						<span className='text-white'>{t("info-three")}</span> <span className='text-[#0060FF]'>.</span>
					</h2>
				</div>
				<div className='right'>
					<p>{t("solutions")}</p>
					<a onClick={() => scrollDown('our-projects')} className='scroll-down '>
						<span>{t("see-our-projects")}</span>
						<ArrowDown/>
					</a>
				</div>
			</div>
		</div>
	)
}
