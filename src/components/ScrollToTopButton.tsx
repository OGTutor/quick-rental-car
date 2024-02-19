'use client';

import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

const ScrollToTopButton: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		setIsVisible(scrollTop > 1200);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`max-w-[50%] mx-auto
			transition-all
			${isVisible ? 'opacity-100' : 'opacity-0'}
			transition duration-700 delay-300`}
		>
			<IconButton
				color="primary"
				aria-label="Scroll to Top"
				onClick={scrollToTop}
				style={{
					position: 'fixed',
					border: '1px solid yellow',
					bottom: '50px',
					right: '50px',
					width: '50px',
					height: '50px',
					display: isVisible ? 'flex' : 'none',
					alignItems: 'center',
					justifyContent: 'center',
					boxShadow: '0px 0px 15px red',
				}}
			>
				<Image
					className="hover:rotate-[270deg]
					-rotate-90 transition duration-500
					delay-150 hover:delay-300
					hover:scale-125 border border-primaryColor
					rounded-full hover:border-white
					shadow-sm shadow-white"
					src="/images/up-arrow.svg"
					alt="Arrow up icon"
					fill
				/>
			</IconButton>
		</div>
	);
};

export default ScrollToTopButton;
