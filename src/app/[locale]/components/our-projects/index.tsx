"use client"

import Link from "next/link"
import { ArrowDown } from "@phosphor-icons/react"

export default function OurProjects(){
	return(
		<div className='our-projects'>
			{/* <div className='line-info'>
				<span>interaction</span>
				<span>fluity</span>
				<span>identitiy</span>
			</div>

			<h2 className='title'>our projects</h2>

			<div className='line-banners'>
				<div className='banner'>
					<div className="image"></div>
					<div className='info-image'>
						<span>app</span>
						<span>web app</span>
						<span>B2B</span>
						<span>genAI</span>
					</div>
				</div>
			</div> */}

			<div className='develop'>
				<div className='left relative'>
					<span className="number-absolute">04</span>
					<h2 className="title relative z-10">
						we develop experiencies <br/>
						<span>in branding and technology</span>.
					</h2>
					<Link href={''} className="">
						<span>contact us</span>
						<ArrowDown className="w-5 h-5"/>
					</Link>
				</div>
				<div className='right'>
					<p>We craft innovative solutions with creativity and technology. Our services focus on websites, applications, and branding,turning ideas into stunning platforms and powerful identities that inspire, engage, and elevate your business.</p>
				</div>
			</div>
		</div>
	)
}
