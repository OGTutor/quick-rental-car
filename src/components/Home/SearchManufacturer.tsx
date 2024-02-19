'use client';

import { manufacturers } from '@/constants';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import { FC } from 'react';

interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer: FC<SearchManufacturerProps> = ({
	manufacturer,
	setManufacturer,
}) => {
	const filteredManufacturers =
		manufacturer === ''
			? manufacturers
			: manufacturers.filter((item) =>
					item
						.toLowerCase()
						.replace(/\s+/g, '')
						.includes(
							manufacturer.toLowerCase().replace(/\s+/g, '')
						)
				);

	return (
		<div className="relative w-full">
			<div className="absolute top-[13px] right-[40px]">
				<Image
					draggable={false}
					unoptimized
					quality={100}
					src="/images/car-logo.svg"
					width={30}
					height={30}
					alt="Car Logo"
					className="max-md:hidden"
				/>
			</div>
			<Autocomplete
				freeSolo
				fullWidth
				value={manufacturer}
				onChange={(e, newValue) => setManufacturer(newValue || '')}
				disablePortal
				options={filteredManufacturers}
				renderInput={(params) => (
					<TextField {...params} label="Manufacturer" />
				)}
			/>
		</div>
	);
};

export default SearchManufacturer;
