"use client"

/* eslint-disable react/no-unescaped-entities */
// import ArrowDownBlue from '/public/icons/arrow-down-blue.svg'

import { ArrowDown } from '@phosphor-icons/react'

import Link from 'next/link'
// import Image from 'next/image'

export default function Split() {
	return(
		<div className='split relative z-10'>
			<div className='content-split flex justify-center relative items-start'>
				<div className='left w-[55%] px-14'>
					<div className='line-numbers flex flex-row justify-between'>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#00FF99] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>10</span>
							</div>
							<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>years creating amazing digital experiencies</p>
						</div>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#1890FF] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>100</span>
							</div>
							<p className='text-xs text-[#BACAF5] max-w-[90px] text-right'>customers from different markets and countries</p>
						</div>
						<div className='line'>
							<div className='flex flex-row gap-2 font-bold'>
								<span className='plus text-[#03F2F2] text-2xl mt-4'>+</span>
								<span className='number text-[54px] text-white'>80</span>
							</div>
							<p className='text-xs !text-[#BACAF5] max-w-[80px] text-right '>full brands great projects developed</p>
						</div>
					</div>
				</div>

				<div className='right w-[45%] px-14 text-base mt-6'>
					<p><strong>Influid</strong> is a digital design studio focused on creating websites, apps, systems, and interactive experiences that really flow.</p>
				</div>
			</div>

			<div className='content-split flex flex-row justify-center items-start'>
				<div className='left w-[55%] pr-14'>
					{/* 02 */}
					<h2 className='title text-[64px] font-bold leading-tight text-right'>
						<span className="text-[#0060FF] block">we create</span>
						<span className='text-white block'>interaction, fluity</span>
						<span className='text-white'>and identity</span> <span className='text-[#0060FF]'>.</span>
					</h2>
				</div>
				<div className='right w-[45%] pl-14 text-base mt-6'>
					<p>We develop unique solutions for each project we deliver, but at the same, we have a quality standard we always ensure. That's our signature.</p>
					<Link href={''} className='items-center text-center flex flex-row gap-2 text-[#0060FF] border border-[#0060FF] rounded-lg font-bold text-base leading-16 h-16 justify-center max-w-[202px] hover:bg-[#0060FF] hover:text-white ease-in-out duration-300 mt-6'>
						<span>see our projects</span>
						<ArrowDown className="w-5 h-5 font-bold"/>
					</Link>
				</div>
			</div>
		</div>
	)
}
