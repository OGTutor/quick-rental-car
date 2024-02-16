'use client';

import { updateSearchParams } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import CustomButton from '../CustomButton';

interface ShowMoreProps {
	pageNumber: number;
	isNext: boolean;
}

const ShowMore: FC<ShowMoreProps> = ({ isNext, pageNumber }) => {
	const router = useRouter();

	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		const newPathname = updateSearchParams('limit', String(newLimit));

		router.push(newPathname);
	};

	return (
		<div
			className="w-full flex items-center
			justify-center gap-5 mt-10"
		>
			{!isNext && (
				<CustomButton
					title="Show More"
					btnType="button"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export default ShowMore;
