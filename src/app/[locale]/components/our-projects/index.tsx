"use client"

import Link from "next/link"
import { ArrowDown } from "@phosphor-icons/react"
import Banner from "../banner"

export default function OurProjects(){
	return(
		<div className='our-projects'>
			<div className="content-slide">
				<div className='line-info'>
					<span>interaction</span>
					<span>fluity</span>
					<span>identitiy</span>
				</div>

				<span className="number-absolute">03</span>
				<h2 className='title'>our projects</h2>

				<div className='line-banners'>
					<Banner
						src={'/iphone1.png'}
						name='Project 1'
					/>
					<Banner
						src={'/iphone2.png'}
						name='Project 2'
					/>
					<Banner
						src={'/iphone3.png'}
						name='Project 3'
					/>
					<Banner
						src={'/iphone1.png'}
						name='Project 1'
					/>
				</div>
			</div>

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
