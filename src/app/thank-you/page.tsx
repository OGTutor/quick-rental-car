import BookingCarCard from '@/components/BookingCar/BookingCarCard';
import CustomButton from '@/components/CustomButton';
import { fetchCars } from '@/lib/utils';
import { FilterProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { GiCarKey } from 'react-icons/gi';

interface BookingCarProps {
	searchParams: FilterProps;
}

export default async function ThankYou({ searchParams }: BookingCarProps) {
	const [car] = await fetchCars({
		manufacturer: searchParams.manufacturer || '',
		year: searchParams.year || 2023,
		fuel: searchParams.fuel || '',
		limit: searchParams.limit || 10,
		model: searchParams.model || '',
	});

	return (
		<div
			className="flex flex-col
			gap-5 relative z-0 max-w-[1440px]
			mx-auto items-center justify-center
			md:justify-between"
		>
			<div
				className="grid max-xl:grid-cols-1
				grid-cols-3 gap-5 mt-44 mb-9
				sm:px-16 px-6 text-center pt-20 pb-10
				transition-all"
			>
				<div className="flex flex-col justify-start">
					<BookingCarCard car={car} />
				</div>
				<div
					className="flex flex-col justify-center
					relative w-full xl:h-full h-[590px] z-0"
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
				<div
					className="flex flex-col justify-start
					shadow-sm shadow-white rounded-3xl
					hover:border-primaryColor
					transition-all overflow-hidden w-full
					hover:scale-[1.02]
					hover:shadow-primaryColor
					hover:shadow-md"
				>
					<h1
						className="text-3xl font-bold
						text-primaryColor animate-pulse
						text-center p-6"
					>
						Thank you for your order
					</h1>
					<p className="text-xl">
						Our operator will contact you shortly
					</p>
					<div
						className="flex items-center
						justify-center text-primaryColor py-10"
					>
						<GiCarKey
							size={50}
							className="animate-bounce transition-all"
						/>
					</div>
					<div
						className="flex items-center
						justify-center max-xl:pb-5"
					>
						<Link
							href="/"
							className="hover:scale-105
							hover:rotate-[360deg]
							transition-all duration-1000"
						>
							<Image
								src="/images/logo.png"
								alt="Quick Car Rental Logo"
								width={100}
								height={100}
								draggable={false}
								className="object-contain"
							/>
						</Link>
					</div>
				</div>
				<div
					className="max-xl:flex max-xl:flex-col
					grid grid-cols-subgrid max-xl:col-span-1
					col-span-3 max-xl:pt-5"
				>
					<div
						className="max-xl:col-start-1
						col-start-2 flex justify-center
						items-center"
					>
						<Link href="/" className="w-full">
							<CustomButton
								title="Back home"
								containerStyles="w-full"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
