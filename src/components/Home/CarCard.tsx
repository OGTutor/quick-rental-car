'use client';

import { calculateCarRent } from '@/lib/utils';
import Image from 'next/image';
import { FC, useState } from 'react';
import CustomButton from '../CustomButton';
import CarDetails from './CarDetails';

export interface CarProps {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
}

interface CarCardProps {
	car: CarProps;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
	const { city_mpg, make, model, transmission, year, drive } = car;

	const [isOpen, setIsOpen] = useState(false);

	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div
			className="flex flex-col p-6
			justify-center items-start
			text-primaryColor bg-black
			hover:bg-primaryColor hover:shadow-md
			rounded-3xl group transition-all
			hover:scale-105 shadow-sm shadow-white
			hover:shadow-primaryColor hover:text-black"
		>
			<div
				className="w-full flex 
				justify-between items-start
				gap-2"
			>
				<h2
					className="text-[22px]
					leading-[26px] font-bold
					capitalize"
				>
					{make} {model}
				</h2>
			</div>
			<p
				className="flex mt-6 text-[32px]
				font-extrabold"
			>
				<span
					className="self-start
					text-[14px] font-semibold"
				>
					$
				</span>
				{carRent}
				<span
					className="self-end
					text-[14px] font-medium"
				>
					/day
				</span>
			</p>
			<div
				className="relative w-full
				h-40 my-3 object-contain"
			>
				<Image
					src="/images/hero.png"
					alt="car model"
					fill
					priority
					draggable={false}
					quality={100}
					unoptimized
					className="object-contain"
				/>
			</div>
			<div
				className="relative flex w-full
				mt-2"
			>
				<div
					className="flex group-hover:invisible
					w-full justify-between"
				>
					<div
						className="flex flex-col
						justify-center items-center
						gap-2"
					>
						<Image
							src="/images/steering-wheel.svg"
							width={20}
							height={20}
							alt="steering wheel"
							draggable={false}
							quality={100}
							unoptimized
						/>
						<p className="text-[14px]">
							{transmission === 'a' ? 'Automatic' : 'Manual'}
						</p>
					</div>
					<div
						className="flex flex-col
						justify-center items-center
						gap-2"
					>
						<Image
							src="/images/tire.svg"
							width={20}
							height={20}
							alt="tire"
							draggable={false}
							quality={100}
							unoptimized
						/>
						<p className="text-[14px]">{drive.toUpperCase()}</p>
					</div>
					<div
						className="flex flex-col
						justify-center items-center
						gap-2"
					>
						<Image
							src="/images/gas.svg"
							width={20}
							height={20}
							alt="gas"
							draggable={false}
							quality={100}
							unoptimized
						/>
						<p className="text-[14px]">{city_mpg} MPG</p>
					</div>
				</div>
				<div
					className="hidden group-hover:flex
					absolute bottom-0 w-full z-10"
				>
					<CustomButton
						title="View More"
						containerStyles="w-full py-[16px]
						bg-black text-primaryColor
						animate-none hover:bg-black
						shadow-md hover:shadow-lg
						hover:shadow-black shadow-black"
						textStyles="text-black text-[14px]
						leading-[17px] font-bold
						text-primaryColor hover:text-primaryColor"
						rightIcon="/images/right-arrow.svg"
						handleClick={() => setIsOpen(true)}
					/>
				</div>
			</div>
			<CarDetails
				isOpen={isOpen}
				closeModal={() => setIsOpen(false)}
				car={car}
			/>
		</div>
	);
};

export default CarCard;
