
import BallOne from '/public/icons/1/ball.svg'
import RightOneIcon from '/public/icons/1/right.svg'
import LeftOneIcon from '/public/icons/1/left.svg'


import BallTwo from '/public/icons/2/ball.svg'
import LeftTwoIcon2 from '/public/icons/2/left-2.svg'
import LeftTwoIcon8 from '/public/icons/2/left-8.svg'
import LeftTwoIcon9 from '/public/icons/2/left-9.svg'
import RightTwoIcon6 from '/public/icons/2/right-6.svg'
import RightTwoIcon7 from '/public/icons/2/right-7.svg'

import BallThree from '/public/icons/3/ball.svg'
import BottomThreeIcon from  '/public/icons/3/bottom.svg'
import RightThreeIcon from '/public/icons/3/right.svg'
import LeftThreeIcon from '/public/icons/3/left.svg'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function WhatWeAre(){

	const t = useTranslations('WhatWeAre')

	return(
		<div id="about-us" className='what-we-are'>
			<div className='item first'>
				<span className="number">01.</span>
				<div className="icons">
					<Image
						src={BallOne}
						alt='Ball'
						width={54}
						height={54}
						className='ball'
					/>
					<Image
						src={RightOneIcon}
						alt='Right Icon'
						width={54}
						height={100}
						className='right'
					/>
					<Image
						src={LeftOneIcon}
						alt='Left Icon'
						width={54}
						height={100}
						className='left'
					/>
				</div>
				<p>{t("description-one")}</p>
			</div>

			<div className='item second'>
				<span className="number">02.</span>
				<div className="icons">
					<Image
						src={LeftTwoIcon2}
						alt='Left Icon'
						width={54}
						height={54}
						className='one'
					/>
					<Image
						src={RightTwoIcon6}
						alt='Right Icon'
						width={54}
						height={54}
						className='two'
					/>
					<Image
						src={LeftTwoIcon8}
						alt='Left Icon'
						width={54}
						height={54}
						className='three'
					/>
					<Image
						src={RightTwoIcon7}
						alt='Right Icon'
						width={54}
						height={54}
						className='four'
					/>
					<Image
						src={LeftTwoIcon9}
						alt='Right Icon'
						width={54}
						height={54}
						className='five'
					/>
					<Image
						src={BallTwo}
						alt='Ball'
						width={54}
						height={54}
						className='ball'
					/>
				</div>
				<p>{t("description-two")}</p>
			</div>
			<div className='item third'>
				<span className="number">03.</span>
				<div className="icons">
					<Image
						src={LeftThreeIcon}
						alt='LeftThreeIcon'
						width={54}
						height={54}
						className='left'
					/>
					<Image
						src={RightThreeIcon}
						alt='RightThreeIcon'
						width={54}
						height={54}
						className='right'
					/>
					<Image
						src={BallThree}
						alt='BallThree'
						width={54}
						height={54}
						className='ball'
					/>
					<Image
						src={BottomThreeIcon}
						alt='BottomThreeIcon'
						width={111}
						height={54}
						className='bottom'
					/>
				</div>
				<p>{t("description-three")}</p>
			</div>
		</div>
	)
}
