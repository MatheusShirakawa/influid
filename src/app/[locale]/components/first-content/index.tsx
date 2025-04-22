"use client"

import Link from "next/link"

import {
	ArrowDown
} from '@phosphor-icons/react'

export default function FirstContent(){
	return(
		<div className='first-content-page'>
			<span className='rounded-full border border-[#1890ff] max-w-[212px] mx-auto text-[#1890ff] text-center px-6 py-[5px] block'>
				influid design studio
			</span>

			<h1 className='justify-center items-center text-center text-[128px] leading-normal font-bold'>
				<span className='text-[#00ff99] block'>we design great</span>
				<div className='mt-[-54px]'>
					<span className='text-[#fff]'>websites</span><span className='text-[#00ff99]'>.</span>
				</div>
			</h1>

			<div className='mx-auto'>
				<Link href={''} className='rounded-full bg-[#0060FF] cursor-pointer flex justify-center items-center w-[36px] h-[36px] mx-auto mt-[80px] mb-[150px]'>
					<ArrowDown className="text-white w-5 h-5"/>
				</Link>
			</div>
		</div>
	)
}
