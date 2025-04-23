import Image from "next/image"

interface BannerProps {
  src: string;
  name: string;
}

export default function Banner({ src, name }: BannerProps) {
	return(
		<div className='banner'>
			<div className="image">
				<Image
					src={src}
					alt={name}
					width={529}
					height={662}
					className='img'
				/>
			</div>
			<div className='info-image'>
				<span>app</span>
				<span>web app</span>
				<span>B2B</span>
				<span>genAI</span>
			</div>
		</div>
	)
}
