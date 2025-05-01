"use client"

import { motion } from 'framer-motion'
import { TargetAndTransition, VariantLabels } from 'framer-motion'

import Header from '../header'
import Split from '../split'
import FirstContent from '../first-content'

interface HeroProps {
	locale?: string | undefined;
	initial?: TargetAndTransition | undefined;
	whileInView?: TargetAndTransition | VariantLabels | undefined;
	transition?: TargetAndTransition | undefined;
	viewport?: object | undefined;
	scrollY?: number | undefined;
}

export default function Hero(props:HeroProps){
	return(
		<motion.div
			initial={props.initial}
			whileInView={props.whileInView}
			transition={props.transition}
			viewport={props.viewport}
			className='relative'>
				<video
					autoPlay
					muted
					loop
					playsInline
					controls={false}
					className="absolute bottom-0 left-0 right-0 top-0 z-[0] h-[calc(200dvh)] w-screen object-cover"
					poster='/video.mp4'>
					<source src="/video.mp4" type='video/mp4'/>
				</video>
			<div className='main-block'>
				<Header locale={props.locale}/>
				<div className='main-content' data-scroll={(props.scrollY ?? 0) > 480 && true}>
					<FirstContent/>
					<Split/>
				</div>
			</div>
		</motion.div>
	)
}
