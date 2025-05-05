import Image from "next/image"

interface BannerProps {
  src: string;
  name: string;
  infoTop: string[];
  infoBottom: string[];
  handleClick?: () => void | undefined;
}

export default function Banner({
	src,
	name,
	infoTop,
	infoBottom,
	handleClick
}: BannerProps) {
	return(
		<div className='banner' onClick={() => handleClick && handleClick()}>
			<div className="info-image-top">
				{infoTop.map((info, index) => (
					<span key={index}>{info}</span>
				))}
			</div>
			<div className="image">
				<Image
					src={src}
					alt={name}
					width={529}
					height={662}
					className='img'
				/>
			</div>
			<div className='info-image-bottom'>
				{infoBottom.map((info, index) => (
					<span key={index}>{info}</span>
				))}
			</div>
		</div>
	)
}
