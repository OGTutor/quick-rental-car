'use client';

import { autocompleteClasses } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FC, PropsWithChildren } from 'react';

const customTheme = () =>
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
								borderRadius: '24px',
								margin: '5px',
								[`&.${autocompleteClasses.option}`]: {
									paddingLeft: '15px',
								},
							}}
							component="li"
							{...props}
							key={option}
						>
							{ownerState.getOptionLabel(option)}
						</Box>
					),
				},
			},
		},
	});

const theme = customTheme();

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
