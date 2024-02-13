import { CarProps, FilterProps } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatPrice(
	price: number | string,
	options: {
		currency?: 'USD' | 'EUR' | 'GBP' | 'BDT';
		notation?: Intl.NumberFormatOptions['notation'];
	} = {}
) {
	const { currency = 'USD', notation = 'compact' } = options;

	const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
}

export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50;
	const mileageFactor = 0.1;
	const ageFactor = 0.05;

	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) {
	const { fuel, limit, manufacturer, model, year } = filters;

	const headers = {
		'X-RapidAPI-Key': 'f2fd0c5ce1mshc09f77ced2d41c0p1670a5jsn636c2f6fc4a2',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
	};

	const response = await fetch(
		`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}
		&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
		{
			headers: headers,
		}
	);

	const result = await response.json();

	return result;
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL('https://cdn.imagin.studio/getimage');

	const { make, year, model } = car;

	url.searchParams.append('customer', 'hrjavascript-mastery');
	url.searchParams.append('make', make);
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('modelYear', `${year}`);
	url.searchParams.append('angle', `${angle}`);

	return `${url}`;
};
