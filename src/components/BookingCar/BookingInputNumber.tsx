'use client';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { FC, useState } from 'react';

const BookingInputNumber: FC = () => {
	const [number, setNumber] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(true);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setNumber(inputValue);

		const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
		setIsValid(phoneRegex.test(inputValue));
	};

	return (
		<div
			className={`border border-customGray
			rounded-bl-[9999px] rounded-tr-[9999px]
			hover:border-primaryColor
			focus-within:border-[2px]
			focus-within:border-primaryColor
			transition-all duration-75 flex
			justify-center items-center
			pl-8 pb-4 
			${!isValid ? 'border-red-600 focus-within:border-red-600 hover:border-red-600' : ''}`}
		>
			<Stack direction="row" width="100%" spacing={2}>
				<TextField
					placeholder="(123) 456-7890"
					error={!isValid}
					fullWidth
					value={number}
					onChange={handleInputChange}
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
