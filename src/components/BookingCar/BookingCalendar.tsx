'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { BsClockHistory } from 'react-icons/bs';

const BookingCalendar: FC = () => {
	const currentDateTime = dayjs().format('YYYY-MM-DDTHH:mm');
	const maxDate = dayjs().add(10, 'year').endOf('year');

	const [pickUpDate, setPickUpDate] = useState(dayjs(currentDateTime));
	const [dropOffDate, setDropOffDate] = useState(null);

	const minTime = dayjs(pickUpDate);

	const handlePickUpDateChange = (date: any) => {
		if (date) {
			setPickUpDate(date);
		}
	};

	const handleDropOffDateChange = (date: any) => {
		if (date) {
			setDropOffDate(date);
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				components={['MobileDateTimePicker', 'StaticDateTimePicker']}
			>
				<div className="hidden max-2xl:flex max-lg:grid grid-cols-1">
					<div className="flex flex-col items-start justify-start">
						<DemoItem label="Pick Up Date">
							<MobileDateTimePicker
								ampm={false}
								ampmInClock={false}
								value={pickUpDate}
								maxDate={maxDate}
								minDate={dayjs(currentDateTime) || undefined}
								orientation="portrait"
								onChange={handlePickUpDateChange}
								shouldDisableTime={(date) => {
									if (
										!pickUpDate ||
										!date.isSame(dayjs(), 'day')
									) {
										return false;
									}

									return date.isBefore(minTime);
								}}
							/>
						</DemoItem>
					</div>
					<div
						className="flex flex-col items-center
						justify-center text-primaryColor
						max-lg:pt-7 p-5"
					>
						<BsClockHistory size={30} />
					</div>
					<div className="flex flex-col items-end justify-end">
						<DemoItem label="Drop Off Date">
							<MobileDateTimePicker
								ampm={false}
								ampmInClock={false}
								value={dropOffDate}
								maxDate={maxDate}
								minDate={pickUpDate || undefined}
								orientation="portrait"
								onChange={handleDropOffDateChange}
								shouldDisableTime={(date) => {
									if (
										!pickUpDate ||
										!date.isSame(dayjs(), 'day') ||
										!date.isSame(dayjs(), 'hour')
									) {
										return date.isBefore(
											pickUpDate.add(3, 'hour')
										);
									}

									return (
										date.isBefore(
											pickUpDate.add(3, 'hour')
										) || date.isSame(pickUpDate, 'hour')
									);
								}}
							/>
						</DemoItem>
					</div>
				</div>
				<div className="hidden 2xl:grid grid-cols-2 gap-5">
					<div className="flex justify-start">
						<DemoItem label="Pick Up Date">
							<StaticDateTimePicker
								ampm={false}
								ampmInClock={false}
								value={pickUpDate}
								maxDate={maxDate}
								minDate={dayjs(currentDateTime) || undefined}
								orientation="portrait"
								onChange={handlePickUpDateChange}
								shouldDisableTime={(date) => {
									if (
										!pickUpDate ||
										!date.isSame(dayjs(), 'day')
									) {
										return false;
									}

									return date.isBefore(minTime);
								}}
							/>
						</DemoItem>
					</div>
					<div className="flex justify-end">
						<DemoItem label="Drop Off Date">
							<StaticDateTimePicker
								ampm={false}
								ampmInClock={false}
								value={dropOffDate}
								maxDate={maxDate}
								minDate={pickUpDate || undefined}
								orientation="portrait"
								onChange={handleDropOffDateChange}
								shouldDisableTime={(date) => {
									if (
										!pickUpDate ||
										!date.isSame(dayjs(), 'day') ||
										!date.isSame(dayjs(), 'hour')
									) {
										return date.isBefore(
											pickUpDate.add(3, 'hour')
										);
									}

									return (
										date.isBefore(
											pickUpDate.add(3, 'hour')
										) || date.isSame(pickUpDate, 'hour')
									);
								}}
							/>
						</DemoItem>
					</div>
				</div>
			</DemoContainer>
		</LocalizationProvider>
	);
};

export default BookingCalendar;
