import BookingCarCard from '@/components/BookingCar/BookingCarCard';
import BookingInputLocation from '@/components/BookingCar/BookingInputLocation';
import BookingInputNumber from '@/components/BookingCar/BookingInputNumber';
import BookingMapBox from '@/components/BookingCar/BookingMapBox';
import CustomButton from '@/components/CustomButton';
import { fetchCars } from '@/lib/utils';
import { FilterProps } from '@/types';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const BookingCalendar = dynamic(
	() => import('@/components/BookingCar/BookingCalendar'),
	{ ssr: false }
);

interface BookingCarProps {
	searchParams: FilterProps;
}

export default async function BookingCar({ searchParams }: BookingCarProps) {
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
				className="grid max-md:grid-cols-1
				grid-cols-2 gap-5 mt-44 mb-9
				sm:px-16 px-6 border border-black
				rounded-3xl shadow-sm shadow-white
				text-center pt-20 pb-10
				hover:shadow-primaryColor
				transition-all"
			>
				<div className="flex flex-col justify-start">
					<BookingCarCard car={car} />
					<div
						className="flex flex-col
						justify-center items-center
						my-10"
					>
						<BookingCalendar />
					</div>
					<div
						className="grid grid-cols-2
						max-sm:grid-cols-1 mb-5"
					>
						<BookingInputNumber />
						<BookingInputLocation />
					</div>
				</div>
				<div
					className="flex flex-col justify-start
					shadow-sm shadow-white rounded-3xl
					hover:border-primaryColor
					transition-all overflow-hidden w-full
					h-[387px] hover:scale-[1.02]
					hover:shadow-primaryColor
					hover:shadow-md"
				>
					<BookingMapBox />
				</div>
				<Link
					href="thank-you"
					className="flex flex-col justify-center
					max-md:mt-10 mt-1"
				>
					<CustomButton
						title="BOOK"
						btnType="submit"
						textStyles="text-2xl capitalize"
					/>
				</Link>
			</div>
		</div>
	);
}
