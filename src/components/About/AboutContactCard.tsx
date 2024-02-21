import { FC } from 'react';
import ContactButton from '../ContactButton';

const AboutContactCard: FC = () => {
	return (
		<div
			className="h-60
			flex flex-col justify-center 
			items-center bg-black
			text-white shadow-sm
			shadow-white
			hover:shadow-primaryColor
			rounded-3xl transition-all"
		>
			<div
				className="text-center flex flex-col
				lg:flex-row relative z-50"
			>
				<h1
					className="text-4xl bold
					max-sm:mr-0 mr-3 max-md:p-5
					max-sm:text-2xl"
				>
					<span className="text-primaryColor animate-pulse">
						Book a car
					</span>{' '}
					by{' '}
					<span className="text-primaryColor animate-pulse">
						getting
					</span>{' '}
					in{' '}
					<span className="text-primaryColor animate-pulse">
						touch
					</span>{' '}
					with us
				</h1>
				<h1 className="text-4xl bold max-sm:ml-0">
					<ContactButton />
				</h1>
			</div>
		</div>
	);
};

export default AboutContactCard;
