import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
	return (
		<>
			<div
				className="flex max-2xl:flex-col
				justify-between gap-5 p-3 
				2xl:px-56 flex-wrap mt-10"
			>
				<div
					className="flex flex-col
					justify-center items-center
					gap-6"
				>
					<Link href="/">
						<Image
							priority
							src="/images/logo.png"
							alt="Quick Car Rental Logo"
							width={100}
							height={100}
							draggable={false}
							className="object-contain"
						/>
					</Link>
					<p className="text-base text-gray-300">
						Quick Rental Car 2024
						<br />
						<span className="text-primaryColor">
							All rights reserved &copy;
						</span>
					</p>
				</div>
				<div
					className="flex-1 w-full flex
					flex-wrap max-2xl:mt-10 gap-20
					max-2xl:justify-center
					max-2xl:items-center
					justify-end items-end"
				>
					{footerLinks.map((link) => (
						<div
							key={link.title}
							className="flex flex-col
							gap-6 text-base min-w-[170px]
							justify-center items-center"
						>
							<h3 className="font-bold">{link.title}</h3>
							{link.links.map((item) => (
								<Link
									key={item.title}
									href={item.url}
									className="text-gray-300 hover:text-white"
								>
									{item.title}
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
			<div
				className="flex items-center mt-10
				border-t border-primaryColor
				rounded-t-lg sm:p-0 p-5 w-full
				flex-col shadow-sm shadow-primaryColor
				3xl:rounded-t-full"
			>
				<p className="text-gray-300 mt-7">
					@2024 Quick Rental Car.{' '}
					<span className="text-primaryColor">
						All Rights Reserved &copy;
					</span>
				</p>
				<div
					className="flex-1 flex sm:justify-end
					justify-center max-sm:mt-4 gap-10
					p-3 lg:p-5 lg:px-64 md:p-4
					md:px-48"
				>
					<Link
						href="/"
						className="text-gray-300
						hover:text-white"
					>
						Privacy Policy
					</Link>
					<Link
						href="/"
						className="text-gray-300
						hover:text-white"
					>
						Terms of Use
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
