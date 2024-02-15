import Image from 'next/image';
import { FC } from 'react';

interface SearchButtonProps {
	otherClasses?: string;
}

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
	return (
		<button
			type="submit"
			className={`z-10 hover:scale-125 transition-all
			flex max-sm:gap-6 gap-20 justify-center items-center hover:gap-0
			hover:-ml-3 w-full h-full ${otherClasses}`}
		>
			<Image
				draggable={false}
				src="/images/right-arrow.svg"
				alt="right icon"
				width={40}
				height={40}
				className="object-contain"
			/>
			<Image
				draggable={false}
				src="/images/magnifying-glass.svg"
				alt="magnifying glass"
				width={40}
				height={40}
				className="object-contain"
			/>
		</button>
	);
};

export default SearchButton;
