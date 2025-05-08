import { scrollDown } from '../../utils/helpers'
import { ArrowUp } from '@phosphor-icons/react'

export default function ScrollTop(){
	return(
		<div className='block-arrow-up ml-auto bottom-0 left-0'>
			<div className='arrow-up' onClick={() => scrollDown('header')}>
				<ArrowUp className="w-5 h-5 text-white"/>
			</div>
		</div>
	)
}
