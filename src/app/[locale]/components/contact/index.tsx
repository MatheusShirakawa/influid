"use client"

import { validateEmail } from '../../utils/helpers'
import { useFormik } from 'formik'
import { ArrowDownRight } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Input from '../input'
import ScrollTop from '../scroll-top'

export default function Contact(){

	const t = useTranslations('Contact')

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

		if(validateEmail(values.email) == false){
			errors.email = t("form.errorFields.email-invalid")
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
		onSubmit: values => {
			console.log(values)
		},
		validateOnChange: false,
		validateOnBlur: false,
		validate
	})

	return(
		<div id="contact" className='contact '>
			<div className='content max-w-[850px] mx-auto pb-[115px] pt-[120px]'>
				<div className='relative'>
					<span className='number-absolute'>05</span>
					<h2 className='title text-[128px] text-[#00FF99] font-bold text-center relative z-10'>
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
							<span>{t("form.send")}</span>
							<ArrowDownRight className='w-5 h-5' />
						</button>
						<div className='messages rounded-lg hidden'>
							<div className='px-6 py-2 bg-[#b9c9f4] text-[#00FF99] rounded-lg mb-4'>
								<p className='text-sm font-bold'>{t("form.success")}</p>
							</div>
							<div className='px-6 py-2 bg-[#b9c9f4] text-red-500 rounded-lg'>
								<p className='text-sm font-bold'>{t("form.error")}</p>
							</div>
						</div>
					</form>
				</div>
			</div>
			<ScrollTop/>
		</div>
	)
}
