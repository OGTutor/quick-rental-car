import Image from 'next/image';
import { FC } from 'react';

interface SearchButtonProps {
	otherClasses?: string;
}

const SearchButton: FC<SearchButtonProps> = ({ otherClasses }) => {
	return (
		<button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
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
