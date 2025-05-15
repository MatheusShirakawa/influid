"use client";

import {
	// motion,
	useTransform,
} from "framer-motion"

import Spin from "../../../../../public/icons/spin";

import {
	useEffect,
} from "react"

import useProgress from "../../functions/use-progress"

export default function LoadingPage(){
	const { done, value } = useProgress()

	useEffect(() => {
		const timer = setTimeout(() => {
			done()
		}, 0)

		return () => (clearTimeout(timer));
	},[done])

	const completeValue = useTransform(value, Math.floor).get() === 100

	return(
		<div className="loading-page" data-value={completeValue}>
			<div className="left"></div>
			<div className="right"></div>
			{/* <div className="number hidden">
				<motion.span>{useTransform(value, Math.floor)}</motion.span>
			</div> */}
			<div className="loader-icon">
				<Spin/>
			</div>
		</div>
	)
}
