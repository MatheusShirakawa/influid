/* eslint-disable @next/next/no-img-element */

interface BannerProps {
  src: string;
  name: string;
  infoTop: string[];
  infoBottom: string[];
  hasInfoTexts?: boolean;
  infoTexts?: string | undefined;
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
	hasInfoTexts = true,
	infoTexts,
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
				<img
					src={src}
					alt={name}
					width={529}
					height={662}
					className='img'
				/>
			</div>
			{hasInfoTexts && (
				<div className="info-image-texts">
					<h3 className="name">{name}</h3>
					<p>{infoTexts}</p>
				</div>
			)}
			<div className='info-image-bottom'>
				{infoBottom.map((info, index) => (
					<span key={index}>{info}</span>
				))}
			</div>
		</div>
	)
}
