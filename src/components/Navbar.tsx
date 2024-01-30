import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
	return (
		<div
			className="flex items-center justify-between p-3
			px-24 shadow-sm shadow-primaryColor
			lg:rounded-b-full md:rounded-b-full rounded-b-lg
			border-b-[1px] border-primaryColor"
		>
			<Link href="/">
				<Image
					src="/images/logo.png"
					alt="logo"
					width={100}
					height={100}
					draggable={false}
				/>
			</Link>

			<div className="hidden md:flex gap-5">
				<h2
					className="hover:bg-primaryColor
								px-3 cursor-pointer p-2
								rounded-full hover:text-black
								font-bold text-primaryColor
								transition-all shadow-sm
								shadow-white animate-pulse
								hover:animate-none hover:shadow-primaryColor
								hover:scale-105"
				>
					Home
				</h2>
				<h2
					className="hover:bg-primaryColor
								px-3 cursor-pointer p-2
								rounded-full hover:text-black
								font-bold text-primaryColor
								transition-all shadow-sm
								shadow-white animate-pulse
								hover:animate-none hover:shadow-primaryColor
								hover:scale-105"
				>
					History
				</h2>
				<h2
					className="hover:bg-primaryColor
								px-3 cursor-pointer p-2
								rounded-full hover:text-black
								font-bold text-primaryColor
								transition-all shadow-sm
								shadow-white animate-pulse
								hover:animate-none hover:shadow-primaryColor
								hover:scale-105"
				>
					Contact Us
				</h2>
			</div>
			<div className="hover:shadow-md shadow-primaryColor rounded-full">
				<UserButton />
			</div>
		</div>
	);
};

export default Navbar;
