"use client"

import { useTranslations } from "next-intl"

export default function Parallax() {

	const t = useTranslations('Parallax')

	return(
		<>
			<div className='item websites'>
				<div className='left'>
					<span>01.</span>
					<h2 className="title">{t("websites")}</h2>
				</div>
				<div className='right'>
					{t("websites-description")}
				</div>
			</div>
			<div className='item applications'>
				<div className='left'>
					<span>02.</span>
					<h2 className="title">{t("applications")}</h2>
					<h2 className="title mobile">apps</h2>
				</div>
				<div className='right'>
					{t("applications-description")}
				</div>
			</div>
			<div className='item branding'>
				<div className='left'>
					<span>03.</span>
					<h2 className="title">{t("branding")}</h2>
				</div>
				<div className='right'>
					{t("branding-description")}
				</div>
			</div>
		</>
	)
}
