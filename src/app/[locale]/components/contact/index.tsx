"use client"

import { useState } from 'react'
import { validateEmail } from '../../utils/helpers'
import { useFormik } from 'formik'
import { ArrowDownRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'

import Spin from '../../../../../public/icons/spin'

import Input from '../input'
import ScrollTop from '../scroll-top'

export default function Contact(){
	const t = useTranslations('Contact')
	const [responseStatus, setResponseStatus] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)

	interface FormValues {
		name: string
		email: string
		message: string
	}

	const validate = (values: FormValues) => {
		const errors: Partial<Record<keyof FormValues, string>> = {}

		if (!values.name) {
			errors.name = t("form.errorFields.name")
		}

		if (!values.email) {
			errors.email = t("form.errorFields.email")
		}

		if(values.email && validateEmail(values.email) == false){
			errors.email = t("form.errorFields.email-format")
		}

		if (!values.message) {
			errors.message = t("form.errorFields.message")
		}

		return errors
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: ''
		},
		onSubmit: async (values) => {
			console.log(values)
			setLoading(true)
			await fetch('/api/mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			}).then(async (res) => {
				console.log(res)
				const data = await res.json()
				if (data) {
					console.log(data)
					setResponseStatus('success')
					setLoading(false)
					formik.resetForm()
				}
			}).catch((error) => {
				setLoading(false)
				setResponseStatus('error')
				console.error("Error sending email:", error)
			})
		},
		validateOnChange: false,
		validateOnBlur: false,
		validate
	})

	return(
		<div id="contact" className='contact'>
			<div className='content max-w-[850px] mx-auto pb-[115px] pt-[120px]'>
				<div className='relative'>
					<span className='number-absolute'>05</span>
					<h2 className='title'>
						{t("title-one")} <span className='text-white'>{t("title-two")}</span>.
					</h2>
				</div>
				<div className='contact-form max-w-[648px] mx-auto px-4'>
					<form action="" onSubmit={formik.handleSubmit} className='flex flex-col gap-12' autoComplete="off">
						<p className='text-[#EBFBFF] block text-base'>{t("description")}</p>

						<Input
							type="text"
							name="name"
							placeholder={t("form.name")}
							value={formik.values.name}
							touched={formik.touched.name ? formik.touched.name : false}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.name}
						/>

						<Input
							type="email"
							name="email"
							placeholder={t("form.email")}
							value={formik.values.email}
							touched={formik.touched.email ? formik.touched.email : false}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.email}
						/>

						<Input
							type="text"
							name="message"
							placeholder={t("form.message")}
							value={formik.values.message}
							touched={formik.touched.message ? formik.touched.message : false}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.errors.message}
						/>

						<button type='submit' className=''>
							{loading ? (
								<div className='flex justify-center items-center w-7 h-7 text-[#00FF99]'>
									<Spin />
								</div>
							): (
								<>
									<span>{t("form.send")}</span>
									<ArrowDownRight className='w-5 h-5 arrow' />
								</>
							)}
						</button>

						<div className='messages rounded-lg'>
							{responseStatus === 'success' && (
								<div className='px-6 py-2 bg-[#060b1b] text-[#00FF99] rounded-lg mb-4'>
									<p className='text-sm font-bold'>{t("form.success")}</p>
								</div>
							)}
							{responseStatus === 'error' && (
								<div className='px-6 py-2 bg-[#060b1b] text-red-500 rounded-lg'>
									<p className='text-sm font-bold'>{t("form.error")}</p>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
			<ScrollTop/>
		</div>
	)
}
