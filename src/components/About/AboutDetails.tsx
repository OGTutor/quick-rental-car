import { FC } from 'react';
import { BiSolidCarGarage, BiSolidCarMechanic } from 'react-icons/bi';
import { FaCarAlt } from 'react-icons/fa';

const AboutDetails: FC = () => {
	return (
		<>
			<h1 className="text-4xl bold">
				You{' '}
				<span
					className="text-primaryColor
					animate-pulse"
				>
					start the engine
				</span>{' '}
				and your{' '}
				<span
					className="text-primaryColor
					animate-pulse"
				>
					adventure begins
				</span>
			</h1>
			<p className="text-2xl text-white py-10">
				Certain but she but shyness why cottage. Guy the put instrument
				sir entreaties affronting. Pretended exquisite see cordially the
				you. Weeks quiet do vexed or whose. Motionless if no to
				affronting imprudence no precaution. My indulged as disposal
				strongly attended.
			</p>
			<div
				className="flex flex-wrap
				md:justify-center justify-between"
			>
				<div
					className="w-full md:w-1/3
					flex flex-col text-center
					items-center"
				>
					<FaCarAlt
						size={50}
						color="fed000"
						className="hover:scale-110
						transition-all"
					/>
					<div className="flex items-center">
						<h1 className="text-4xl bold">20</h1>
						<span className="text-primaryColor animate-pulse">
							/
						</span>
						<p className="text-md text-white">Car Types</p>
					</div>
				</div>
				<div
					className="w-full md:w-1/3 flex
					flex-col text-center items-center
					pt-5 md:pt-0"
				>
					<BiSolidCarGarage
						size={50}
						color="fed000"
						className="hover:scale-110
						transition-all"
					/>
					<div className="flex items-center">
						<h1 className="text-4xl bold">85</h1>
						<span className="text-primaryColor animate-pulse">
							/
						</span>
						<p className="text-md text-white">Rental Outlets</p>
					</div>
				</div>
				<div
					className="w-full md:w-1/3 flex flex-col
					text-center items-center pt-5 md:pt-0"
				>
					<BiSolidCarMechanic
						size={50}
						color="fed000"
						className="hover:scale-110
						transition-all"
					/>
					<div className="flex items-center">
						<h1 className="text-4xl bold">75</h1>
						<span className="text-primaryColor animate-pulse">
							/
						</span>
						<p className="text-md text-white">Repair Shop</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutDetails;
