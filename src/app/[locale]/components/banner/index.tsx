import Image from "next/image"

interface BannerProps {
  src: string;
  name: string;
  infoTop: string[];
  infoBottom: string[];
  arrayImgs?: ArrayImages[] | undefined;
  handleClick?: (arrayImgs: ArrayImages[]) => void | undefined;
}

interface ArrayImages {
	img: string;
	name: string;
	infoTop: string[];
	infoBottom: string[]
}

export default function Banner({
	src,
	name,
	infoTop,
	infoBottom,
	arrayImgs,
	handleClick
}: BannerProps) {
	return(
		<div className='banner' onClick={() => handleClick && handleClick(arrayImgs || [])}>
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
