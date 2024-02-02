'use client';

import CarsFiltersOption from '@/components/Home/CarsFiltersOption';
import Hero from '@/components/Home/Hero';
import SearchInput from '@/components/Home/SearchInput';

export default function Home() {
	return (
		<div className="overflow-hidden p-5 sm:px-10 md:px-28">
			<Hero />
			<SearchInput />
			<CarsFiltersOption />
		</div>
	);
}
