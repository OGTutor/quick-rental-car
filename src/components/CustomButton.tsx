'use client';

import { cn } from '@/lib/utils';
import { FC, MouseEventHandler } from 'react';

interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: 'button' | 'submit';
}

const CustomButton: FC<CustomButtonProps> = ({
	title,
	containerStyles,
	handleClick,
	btnType = 'button',
}) => {
	return (
		<button
			disabled={false}
			type={btnType}
			className={cn(
				`flex flex-row relative
				justify-center items-center
				outline-none hover:bg-primaryColor
				px-4 cursor-pointer p-2
				rounded-full hover:text-black
				font-bold text-primaryColor
				transition-all shadow-sm
				shadow-white animate-pulse
				hover:animate-none hover:shadow-primaryColor
				hover:scale-105 ${containerStyles}`,
				{}
			)}
			onClick={handleClick}
		>
			<span className={`flex-1 px-4`}>{title}</span>
		</button>
	);
};

export default CustomButton;
