'use client';

import { manufacturers } from '@/constants';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import { FC } from 'react';

interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (manufacturer: string) => void;
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
		components: {
			MuiAutocomplete: {
				defaultProps: {
					renderOption: (props, option, state, ownerState) => (
						<Box
							sx={{
								// borderRadius: '24px',
								borderTopLeftRadius: '9999px',
								borderBottomLeftRadius: '9999px',
								margin: '5px',
								[`&.${autocompleteClasses.option}`]: {
									paddingLeft: '15px',
								},
							}}
							component="li"
							{...props}
						>
							{ownerState.getOptionLabel(option)}
						</Box>
					),
				},
			},
		},
	});

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
		<div
			className="flex-1 max-sm:w-full
			flex justify-start items-center"
		>
			<ThemeProvider theme={customTheme}>
				<div className="relative w-full">
					<div className="absolute top-[13px] right-[65px]">
						<Image
							draggable={false}
							unoptimized
							quality={100}
							src="/images/car-logo.svg"
							width={30}
							height={30}
							alt="Car Logo"
						/>
					</div>
					<Autocomplete
						value={manufacturer}
						onChange={(e, newValue) =>
							setManufacturer(newValue || '')
						}
						disablePortal
						options={filteredManufacturers}
						renderInput={(params) => (
							<TextField {...params} label="Manufacturer" />
						)}
					/>
				</div>
			</ThemeProvider>
		</div>
	);
};

export default SearchManufacturer;
