import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<div>
				<h2 className="text-[40px] md:text-[60px] font-bold text-white">
					<span className="text-primaryColor animate-pulse">
						Premium{' '}
					</span>
					Car{' '}
					<span className="text-primaryColor animate-pulse">
						Rental{' '}
					</span>
					in Your{' '}
					<span className="text-primaryColor animate-pulse">
						Area{' '}
					</span>
				</h2>
				<h2 className="text-[20px] text-gray-400 pr-20 mt-5">
					<span className="text-primaryColor animate-pulse">
						Book{' '}
					</span>
					the{' '}
					<span className="text-primaryColor animate-pulse">
						selected{' '}
					</span>
					car effortlessly, Pay for driving only, Book the{' '}
					<span className="text-primaryColor animate-pulse">
						Car Now{' '}
					</span>
				</h2>
				<button
					className="mt-5 hover:scale-105  hover:bg-primaryColor
								px-4 cursor-pointer p-2
								rounded-full hover:rounded-full
								hover:text-black font-bold
								text-primaryColor transition-all
								shadow-sm shadow-white animate-pulse
								hover:animate-none hover:shadow-primaryColor"
				>
					Explore Cars
				</button>
			</div>
			<div>
				<Image
					src="/images/hero.png"
					draggable={false}
					alt="hero"
					width={400}
					height={400}
					className="w-full object-cover align-middle animate-pulse"
					unoptimized
					quality={100}
				/>
			</div>
		</div>
	);
};

export default Hero;
