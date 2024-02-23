'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { FC } from 'react';

const BookingCalendar: FC = () => {
	const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm');
	const maxDate = dayjs().add(10, 'year').endOf('year');

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				components={['MobileDateTimePicker', 'StaticDateTimePicker']}
			>
				<div className="hidden max-2xl:flex">
					<DemoItem label="Pick Up Date">
						<MobileDateTimePicker
							maxDate={maxDate}
							minDate={dayjs(currentDateTime)}
							orientation="portrait"
							defaultValue={dayjs(currentDateTime)}
						/>
					</DemoItem>
					<DemoItem label="Drop Off Date">
						<MobileDateTimePicker
							maxDate={maxDate}
							minDate={dayjs(currentDateTime)}
							orientation="portrait"
							defaultValue={dayjs(currentDateTime)}
						/>
					</DemoItem>
				</div>
				<div className="hidden 2xl:grid grid-cols-2 gap-5">
					<div className="flex justify-start">
						<DemoItem label="Pick Up Date">
							<StaticDateTimePicker
								displayWeekNumber={true}
								maxDate={maxDate}
								minDate={dayjs(currentDateTime)}
								orientation="portrait"
								defaultValue={dayjs(currentDateTime)}
							/>
						</DemoItem>
					</div>
					<div className="flex justify-end">
						<DemoItem label="Drop Off Date">
							<StaticDateTimePicker
								maxDate={maxDate}
								minDate={dayjs(currentDateTime)}
								orientation="portrait"
								defaultValue={dayjs(currentDateTime)}
							/>
						</DemoItem>
					</div>
				</div>
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default BookingCalendar;
