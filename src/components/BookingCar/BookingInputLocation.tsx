'use client';

import { useLocation } from '@/context/UserLocationContext';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FC } from 'react';

const BookingInputLocation: FC = () => {
	const { updateLocation } = useLocation();

	const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		updateLocation(value);
	};

	return (
		<div
			className="border border-customGray
			rounded-tl-[9999px] rounded-br-[9999px]
			hover:border-primaryColor
			focus-within:border-[2px]
			focus-within:border-primaryColor
			transition-all duration-75 flex
			justify-center items-center
			pl-14 pb-4"
		>
			<Stack direction="row" width="100%" spacing={2}>
				<TextField
					placeholder="Where to deliver the car"
					fullWidth
					onChange={handleLocationChange}
					label="Your location"
					variant="standard"
					id="standard-basic"
					InputProps={{
						disableUnderline: true,
					}}
					margin="normal"
				/>
			</Stack>
		</div>
	);
};

export default BookingInputLocation;
