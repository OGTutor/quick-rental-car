'use client';

import TextField from '@mui/material/TextField';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import { FC } from 'react';

interface SearchModelProps {
	model: string;
	setModel: (model: string) => void;
}

const customTheme = (outerTheme: Theme) =>
	createTheme({
		typography: {
			fontFamily: ['Single Day', 'cursive'].join(','),
		},
		palette: {
			mode: 'dark',
			primary: {
				main: '#fed000',
			},
			background: {
				paper: '#000',
			},
			text: {
				primary: '#fed000',
				secondary: '#fed000',
			},
			action: {
				active: '#fed000',
			},
		},
	});

const SearchModel: FC<SearchModelProps> = ({ model, setModel }) => {
	return (
		<div className="relative w-full">
			<ThemeProvider theme={customTheme}>
				<div className="absolute top-[11px] right-[35px]">
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
					sx={{
						width: 'fullscreen',
					}}
				/>
			</ThemeProvider>
		</div>
	);
};

export default SearchModel;
