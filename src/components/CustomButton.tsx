'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { FC, MouseEventHandler } from 'react';

interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
	btnType?: 'button' | 'submit';
	isDisabled?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
	title,
	containerStyles,
	handleClick,
	btnType = 'button',
	textStyles,
	rightIcon,
	isDisabled,
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
			<span className={`flex-1 px-4 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image
						src={rightIcon}
						alt="right icon"
						fill
						className="object-contain"
					/>
				</div>
			)}
		</button>
	);
};

export default CustomButton;
