
import BallOne from '/public/icons/1/ball.svg'
import RightOneIcon from '/public/icons/1/right.svg'
import LeftOneIcon from '/public/icons/1/left.svg'

import Image from 'next/image'

export default function WhatWeAre(){
	return(
		<div className='what-we-are'>
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
				<p>All digital products are made to provide an interaction between users and information, making possible the accomplishment of the users wishes or needs through the company` services or products.</p>
			</div>

			<div className='item second'>
				<span className="number">02.</span>
				<div className="icons">

				</div>
				<p>This connection must have a good fluity, it should happen smoothly, because the main goal of a digital experience is always to make the users life easier and happier.</p>
			</div>
			<div className='item third'>
				<span className="number">03.</span>
				<div className="icons">

				</div>
				<p>And all this process must represent your identity. Your digital product should have your fingerprint, to promote an affectual relation between your public and your brand.</p>
			</div>
		</div>
	)
}
