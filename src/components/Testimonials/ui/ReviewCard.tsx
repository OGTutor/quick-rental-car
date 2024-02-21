import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { PiQuotesFill } from 'react-icons/pi';

interface ReviewCardProps {
	title: string;
	image: string;
	name: string;
	city: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ city, image, name, title }) => {
	return (
		<div className="w-full xl:w-1/3 p-4">
			<div
				className="bg-black
				shadow-white shadow-sm
				hover:shadow-primaryColor
				rounded-3xl overflow-hidden
				hover:scale-105 transition-all"
			>
				<div className="p-14">
					<h2
						className="text-xl
						font-semibold text-center"
					>
						&quot;{title}&quot;
					</h2>
					<div
						className="mt-3 flex
						flex-row max-sm:flex-col
						items-center text-center
						md:text-left justify-between
						md:grid grid-cols-6 gap-4"
					>
						<div
							className="flex flex-col
							items-center justify-center
							col-start-1 col-end-3"
						>
							<Image
								width={70}
								height={70}
								className="rounded-full
								shadow-sm shadow-white
								hover:shadow-primaryColor
								transition-all"
								alt={`${name} review`}
								src={image}
							/>
						</div>
						<div
							className="flex flex-col
							items-center justify-center
							col-end-7 col-span-2"
						>
							<Link href="/">
								<Image
									width={70}
									height={70}
									className="rounded-full
									shadow-sm shadow-white
									hover:shadow-primaryColor
									transition-all"
									alt="Logo"
									src="/images/logo.png"
								/>
							</Link>
						</div>
						<div
							className="text-center flex
							flex-col items-center
							justify-center col-start-1
							col-end-7"
						>
							<h3
								className="text-xl bold
								text-primaryColor animate-pulse"
							>
								{name}
							</h3>
							<h4 className="text-md">{city}</h4>
						</div>
						<div
							className="text-primaryColor hover:scale-110
							transition-all flex items-center justify-center
							col-start-1 col-end-3 rotate-180 hover:-rotate-180
							duration-700"
						>
							<PiQuotesFill size={52} />
						</div>
						<div
							className="text-primaryColor hover:scale-110
							transition-all flex items-center justify-center
							col-end-7 col-span-2 max-md:hidden hover:rotate-[360deg]
							duration-700"
						>
							<PiQuotesFill size={52} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
