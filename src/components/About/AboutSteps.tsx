import Image from 'next/image';
import { FC } from 'react';

const AboutSteps: FC = () => {
	return (
		<div
			className="flex flex-col items-center
			justify-center md:justify-between py-20"
		>
			<div className="text-center">
				<h3 className="text-white text-xl font-bold">
					Plan{' '}
					<span className="text-primaryColor animate-pulse">
						your
					</span>{' '}
					trip now
				</h3>
				<h1 className="text-white text-4xl font-bold">
					<span className="text-primaryColor animate-pulse">
						Quick
					</span>{' '}
					& easy car{' '}
					<span className="text-primaryColor animate-pulse">
						rental
					</span>
				</h1>
			</div>
			<div className="md:grid grid-cols-3 gap-48 mt-10">
				<div className="flex flex-col items-center">
					<Image
						className="hover:scale-110
						transition-all"
						unoptimized
						quality={100}
						width={170}
						height={170}
						src="/images/about-icon-select.png"
						alt="About select icon"
					/>
					<h1
						className="text-primaryColor
						animate-pulse text-2xl font-bold"
					>
						Select Car
					</h1>
					<p className="text-white">
						We offers a big range of vehicles for all your driving
						needs. We have the perfect car to meet your needs
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image
						className="hover:scale-110
						transition-all"
						unoptimized
						quality={100}
						width={170}
						height={170}
						src="/images/about-icon-contact.png"
						alt="About contact icon"
					/>
					<h1
						className="text-primaryColor
						animate-pulse text-2xl font-bold"
					>
						Contact Operator
					</h1>
					<p className="text-white">
						Our knowledgeable and friendly operators are always
						ready to help with any questions or concerns
					</p>
				</div>
				<div className="text-center flex flex-col items-center">
					<Image
						className="hover:scale-110
						transition-all"
						unoptimized
						quality={100}
						width={170}
						height={170}
						src="/images/about-icon-drive.png"
						alt="About drive icon"
					/>
					<h1
						className="text-primaryColor
						animate-pulse text-2xl font-bold"
					>
						Let`s Drive
					</h1>
					<p className="text-white">
						Whether you`re hitting the open road, we`ve got you
						covered with our wide range of cars
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutSteps;
