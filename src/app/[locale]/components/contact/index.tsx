"use client"

import { ArrowDownRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

export default function Contact(){

	const t = useTranslations('Contact')

	return(
		<div id="contact" className='contact max-w-[850px] mx-auto mb-[115px] pt-[120px]'>
			<div className='relative'>
				<span className='number-absolute'>05</span>
				<h2 className='title text-[128px] text-[#00FF99] font-bold text-center relative z-10'>
					{t("title-one")} <span className='text-white'>{t("title-two")}</span>.
				</h2>
			</div>
			<div className='contact-form max-w-[648px] mx-auto'>
				<form action="" className='flex flex-col gap-12'>
					<p className='text-[#EBFBFF] block text-base'>{t("description")}</p>
					<label>
						<span className='absolute-placeholder'>{t("form.name")}</span>
						<input
							type="text"
							placeholder={t("form.name")}
						/>
					</label>
					<label>
						<span className='absolute-placeholder'>{t("form.email")}</span>
						<input
							type="email"
							placeholder={t("form.email")}
						/>
					</label>
					<label>
						<span className='absolute-placeholder'>{t("form.message")}</span>
						<input
							type="text"
							placeholder={t("form.message")}
						/>
					</label>
					<button type='submit' className=''>
						<span>{t("form.send")}</span>
						<ArrowDownRight className='w-5 h-5' />
					</button>
				</form>
			</div>
		</div>
	)
}
