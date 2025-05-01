"use client"

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

import BallTwoIcon from '../../../../../public/icons/2/ballTwo'
import LeftTwoIcon2 from '../../../../../public/icons/2/leftTwo2'
import LeftTwoIcon8 from '../../../../../public/icons/2/leftTwo8'
import LeftTwoIcon9 from '../../../../../public/icons/2/leftTwo9'
import RightTwoIcon6 from '../../../../../public/icons/2/rightTwo6'
import RightTwoIcon7 from '../../../../../public/icons/2/rightTwo7'

import BallThreeIcon from '../../../../../public/icons/3/ballThree'
import LeftThreeIcon from '../../../../../public/icons/3/leftThree'
import RightThreeIcon from '../../../../../public/icons/3/rightThree'
import BottomThreeIcon from '../../../../../public/icons/3/bottomThree'

import BallOneIcon from '../../../../../public/icons/1/ballOne'
import LeftOneIcon from '../../../../../public/icons/1/leftOne'
import RightOneIcon from '../../../../../public/icons/1/rightOne'

import { TargetAndTransition, VariantLabels } from 'framer-motion';

interface WhatWeAreProps {
	initial?: TargetAndTransition | undefined;
	whileInView?: TargetAndTransition | VariantLabels | undefined;
	transition?: TargetAndTransition | undefined;
	viewport?: object | undefined;
}

export default function WhatWeAre(props: WhatWeAreProps){

	const t = useTranslations('WhatWeAre')

	return(
		<motion.div
			id="about-us"
			className="what-we-are"
			initial={props.initial}
			whileInView={props.whileInView}
			transition={props.transition}
			viewport={props.viewport}
		>
			<div className='item first'>
				<span className="number">01.</span>
				<div className="icons">
					<BallOneIcon />
					<div className='bottom'>
						<LeftOneIcon />
						<RightOneIcon />
					</div>
				</div>
				<p>{t("description-one")}</p>
			</div>

			<div className='item second'>
				<span className="number">02.</span>
				<div className="icons">
					<div className='full'>
						<LeftTwoIcon2/>
						<RightTwoIcon6/>
						<LeftTwoIcon8/>
						<RightTwoIcon7/>
						<LeftTwoIcon9/>
						<BallTwoIcon/>
					</div>
				</div>
				<p>{t("description-two")}</p>
			</div>
			<div className='item third'>
				<span className="number">03.</span>
				<div className="icons">
					<div className='top'>
						<LeftThreeIcon />
						<RightThreeIcon/>
					</div>
					<BallThreeIcon />
					<BottomThreeIcon/>
				</div>
				<p>{t("description-three")}</p>
			</div>
		</motion.div>
	)
}
