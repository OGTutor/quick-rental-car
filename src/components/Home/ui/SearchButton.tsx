import Image from 'next/image';
import { FC } from 'react';

interface SearchButtonProps {
	otherClasses?: string;
}

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
	return (
		<button
			type="submit"
			className={`z-10 hover:scale-125 transition-all ${otherClasses}`}
		>
			<Image
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
