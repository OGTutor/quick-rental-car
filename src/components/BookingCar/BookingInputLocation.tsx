'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';

const BookingInputLocation: FC = () => {
	const [location, setLocation] = useState('');

	return (
		<div
			className="border border-customGray rounded-tl-[9999px] rounded-br-[9999px] hover:border-primaryColor focus-within:border-[2px]
			focus-within:border-primaryColor transition-all duration-75 flex justify-center items-center
			pl-14 pb-4"
		>
			<Stack direction="row" width="100%" spacing={2}>
				<TextField
					fullWidth
					defaultValue=""
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					label="Location"
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
