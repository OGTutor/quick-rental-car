import Image from 'next/image';
import { FC } from 'react';

const AboutHero: FC = () => {
	return (
		<>
			<h1
				className="2xl:text-[72px]
				sm:text-[64px] text-[50px]
				font-extrabold text-white"
			>
				<span
					className="text-primaryColor
					animate-pulse"
				>
					Quick{' '}
				</span>
				<span
					className="text-primaryColor
					animate-pulse"
				>
					Rental{' '}
				</span>
				<span
					className="text-primaryColor
					animate-pulse"
				>
					Car{' '}
				</span>
				<span>is the best car rental service </span>
				<span
					className="text-primaryColor
					animate-pulse"
				>
					in Your Area{' '}
				</span>
			</h1>
			<div
				className="grid grid-cols-3 gap-4
				mx-auto text-6xl font-extrabold
				capitalize py-20 max-ms:text-2xl"
			>
				<div
					className="flex items-center
					justify-center animate-bounce"
				>
					<Image
						className="rotate-90"
						src="/images/down-arrow.svg"
						alt="Down Arrow"
						width={150}
						height={150}
					/>
				</div>
				<div
					className="flex items-center
					justify-center"
				>
					ABOUT COMPANY
				</div>
				<div
					className="flex items-center
					justify-center animate-bounce"
				>
					<Image
						className="rotate-90"
						src="/images/down-arrow.svg"
						alt="Down Arrow"
						width={150}
						height={150}
					/>
				</div>
			</div>
		</>
	);
};

export default AboutHero;
