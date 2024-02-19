import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import CustomButton from './CustomButton';

const paths = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'History',
		path: '/history',
	},
	{
		title: 'Contact Us',
		path: '/contact-us',
	},
];

const Navbar: FC = () => {
	return (
		<nav
			className="flex items-center justify-between lg:p-3
			lg:px-24 shadow-sm shadow-primaryColor
			max-md:rounded-b-lg rounded-b-full
			border-b-[1px] border-primaryColor md:p-2 md:px-20
			p-1 px-10"
		>
			<Link
				href="/"
				className="flex justify-center
				items-center"
			>
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
			<div className="hidden md:flex gap-5">
				{paths.map(({ title, path }) => (
					<Link href={path} key={path}>
						<CustomButton title={title} />
					</Link>
				))}
			</div>
			<div>
				<UserButton />
			</div>
		</nav>
	);
};

export default Navbar;
