'use client';

import TextField from '@mui/material/TextField'
import Image from 'next/image'
import { FC } from 'react'

interface SearchModelProps {
	model: string;
	setModel: (model: string) => void;
}

const SearchModel: FC<SearchModelProps> = ({ model, setModel }) => {
	return (
		<div className="relative w-full">
			<div className="absolute top-[11px] right-[40px] max-sm:hidden">
				<Image
					draggable={false}
					unoptimized
					quality={100}
					src="/images/model-icon.png"
					alt="car model"
					width={30}
					height={30}
				/>
			</div>
			<TextField
				fullWidth
				value={model}
				onChange={(e) => setModel(e.target.value)}
				id="outlined-basic"
				label="Model"
				variant="outlined"
			/>
		</div>
	);
};

export default SearchModel;
