'use client';

import Image from 'next/image';
import { FC } from 'react';
import CustomButton from '../CustomButton';

const Hero: FC = () => {
	const handleScroll = () => {};

	return (
		<div
			className="flex xl:flex-row flex-col
			gap-5 relative z-0 max-w-[1440px] mx-auto"
		>
			<div className="flex-1 pt-36 sm:px-16 px-6">
				<h1
					className="2xl:text-[72px]
					sm:text-[64px] text-[50px]
					font-extrabold text-white"
				>
					<span
						className="text-primaryColor
						animate-pulse"
					>
						Premium{' '}
					</span>
					Car{' '}
					<span
						className="text-primaryColor
						animate-pulse"
					>
						Rental{' '}
					</span>
					in Your{' '}
					<span
						className="text-primaryColor
						animate-pulse"
					>
						Area{' '}
					</span>
				</h1>
				<p
					className="text-[27px] text-black-100
					font-light mt-5"
				>
					<span
						className="text-primaryColor
						animate-pulse"
					>
						Book{' '}
					</span>
					the{' '}
					<span
						className="text-primaryColor
						animate-pulse"
					>
						selected{' '}
					</span>
					car effortlessly, Pay for driving only, Book the{' '}
					<span
						className="text-primaryColor
						animate-pulse"
					>
						Car Now{' '}
					</span>
				</p>
				<CustomButton title="Explore Cars" handleClick={handleScroll} />
			</div>
			<div
				className="xl:flex-[1.5] flex
				justify-end items-end w-full
				xl:h-screen"
			>
				<div
					className="relative
					xl:w-full w-[90%]
					xl:h-full h-[590px] z-0"
				>
					<Image
						src="/images/hero.png"
						draggable={false}
						alt="hero"
						fill
						className="object-contain animate-pulse"
						unoptimized
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
