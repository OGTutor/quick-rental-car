'use client';

import { calculateCarRent, generateCarImageUrl } from '@/lib/utils';
import { CarProps } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

interface BookingCarCardProps {
	car: CarProps;
}

const BookingCarCard: FC<BookingCarCardProps> = ({ car }) => {
	const carRent = calculateCarRent(car.city_mpg, car.year);

	return (
		<div
			className="flex flex-col p-6
			justify-center items-start
			text-primaryColor bg-black
			hover:shadow-md rounded-3xl
			group transition-all hover:scale-[1.02]
			shadow-sm shadow-white
			hover:shadow-primaryColor"
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
					{car.make} {car.model}
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
					src={generateCarImageUrl(car)}
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
					className="flex
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
							{car.transmission === 'a' ? 'Automatic' : 'Manual'}
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
						<p className="text-[14px]">{car.drive.toUpperCase()}</p>
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
						<p className="text-[14px]">{car.city_mpg} MPG</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingCarCard;
