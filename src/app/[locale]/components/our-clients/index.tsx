import Image from "next/image"


import DbGroup from '/public/icons/brands/db1-group.svg'
import Moderna from '/public/icons/brands/moderna.svg'
import Mol from '/public/icons/brands/mol.svg'
import Poliedro from '/public/icons/brands/poliedro.svg'
import Sm from '/public/icons/brands/sm.svg'
import Stanleys from '/public/icons/brands/stanleys.svg'

export default function OurClients(){
	return(
		<div className='our-clients'>
			<h2 className='title text-[64px] text-center font-bold text-[#03F2F2]'>
				our <span className='text-white'>clients</span>.
			</h2>
			<div className='list-clients mt-10 flex gap-14 flex-row justify-between items-center'>
				<Image
					width={200}
					height={60}
					src={DbGroup}
					alt=''
				/>
				<Image
					width={200}
					height={60}
					src={Moderna}
					alt=''
				/>
				<Image
					width={200}
					height={60}
					src={Mol}
					alt=''
				/>
				<Image
					width={200}
					height={60}
					src={Poliedro}
					alt=''
				/>
				<Image
					width={100}
					height={100}
					src={Sm}
					alt=''
				/>
				<Image
					width={200}
					height={60}
					src={Stanleys}
					alt=''
				/>
			</div>
		</div>

	)
}
