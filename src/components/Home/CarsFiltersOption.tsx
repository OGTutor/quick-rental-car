import { ThemeProvider, createTheme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

const yourColor = '#fed000';

const customTheme = createTheme({
	palette: {
		primary: {
			main: '#fed000',
		},
	},
});

const CarsFiltersOption: FC = () => {
	const [price, setPrice] = useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setPrice(event.target.value);
	};

	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#fed000',
			},
		},
	});

	return (
		<div className="mt-10 flex items-center justify-between">
			<div>
				<h2 className="text-[30px] font-bold">Cars Catalog</h2>
				<h2>Explore our cars you might likes</h2>
			</div>
			<div className="flex gap-5">
				<ThemeProvider theme={theme}>
					<FormControl
						className="text-primaryColor hover:border-primaryColor"
						variant="outlined"
						sx={{
							minWidth: 120,
						}}
					>
						<InputLabel
							id="demo-simple-select-standard-label"
							className="text-primaryColor active:text-primaryColor"
						>
							<span className="text-primaryColor">Price</span>
						</InputLabel>
						<Select
							className="text-primaryColor w-full md:block max-w-xs hidden"
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={price}
							onChange={handleChange}
							label="Price"
						>
							<MenuItem className="text-primaryColor" value="">
								<em>None</em>
							</MenuItem>
							<MenuItem className="text-primaryColor" value={10}>
								Min to Max
							</MenuItem>
							<MenuItem className="text-primaryColor" value={20}>
								Max to Min
							</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						className="text-primaryColor hover:border-primaryColor"
						variant="outlined"
						sx={{
							minWidth: 140,
						}}
					>
						<InputLabel
							id="demo-simple-select-standard-label"
							className="text-primaryColor active:text-primaryColor"
						>
							<span className="text-primaryColor">
								Manufacture
							</span>
						</InputLabel>
						<Select
							className="text-primaryColor"
							labelId="demo-simple-select-standard-label"
							id="demo-simple-select-standard"
							value={price}
							onChange={handleChange}
							label="Manufacture"
						>
							<MenuItem className="text-primaryColor" value="">
								<em>Manufacture</em>
							</MenuItem>
							<MenuItem className="text-primaryColor" value={10}>
								Honda
							</MenuItem>
							<MenuItem className="text-primaryColor" value={20}>
								BMW
							</MenuItem>
							<MenuItem className="text-primaryColor" value={20}>
								Toyota
							</MenuItem>
						</Select>
					</FormControl>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default CarsFiltersOption;
