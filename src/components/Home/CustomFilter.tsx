'use client';

import { updateSearchParams } from '@/lib/utils';
import { OptionProps } from '@/types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

interface CustomFilterProps {
	title: string;
	options: OptionProps[];
}

const CustomFilter: FC<CustomFilterProps> = ({ options, title }) => {
	const router = useRouter();
	const [selected, setSelected] = useState<OptionProps>(options[0]);

	const handleUpdateParams = (title: string, value: string) => {
		const newPathname = updateSearchParams(title, value.toLowerCase());

		router.push(newPathname);
	};

	const handleChange = (event: SelectChangeEvent) => {
		setSelected({
			title: event.target.value,
			value: event.target.value,
		});
		handleUpdateParams(event.target.value, event.target.value);
	};

	return (
		<div className="w-fit">
			<div
				className="relative w-full
					min-w-[127px] flex
					justify-between items-center
					cursor-default py-2 text-left
					sm:text-sm"
			>
				<FormControl sx={{ minWidth: 127 }} size="small">
					<InputLabel id="demo-select-small-label">
						{title.charAt(0).toUpperCase() + title.slice(1)}
					</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={selected.value}
						label={title.charAt(0).toUpperCase() + title.slice(1)}
						onChange={handleChange}
						sx={{ borderRadius: '24px' }}
					>
						{options.map((option) => (
							<MenuItem
								sx={{
									borderRadius: '24px',
									margin: '5px',
									paddingLeft: '15px',
								}}
								value={option.value}
								key={option.title}
							>
								{option.title}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
};

export default CustomFilter;
