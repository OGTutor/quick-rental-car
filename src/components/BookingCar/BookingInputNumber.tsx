'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';

const BookingInputNumber: FC = () => {
	const [number, setNumber] = useState<string>('');

	return (
		<div
			className="border border-customGray rounded-bl-[9999px] rounded-tr-[9999px] hover:border-primaryColor focus-within:border-[2px]
			focus-within:border-primaryColor transition-all duration-75 flex justify-center items-center
			pl-8 pb-4"
		>
			<Stack direction="row" width="100%" spacing={2}>
				<TextField
					fullWidth
					defaultValue=""
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					label="Phone number"
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

export default BookingInputNumber;
