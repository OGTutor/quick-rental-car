'use client';

import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import SearchManufacturer from './SearchManufacturer';
import SearchModel from './SearchModel';
import SearchButton from './ui/SearchButton';

const SearchBar: FC = () => {
	const router = useRouter();
	const [manufacturer, setManufacturer] = useState<string>('');
	const [model, setModel] = useState<string>('');

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (manufacturer === '' && model === '') {
			toast.error('Please fill in the search bar!', {
				position: 'top-center',
				theme: 'dark',
				className: `rounded-3xl shadow-sm
							shadow-white
							hover:shadow-primaryColor
							hover:shadow-md p-3`,
			});
			return;
		}

		updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
	};

	const updateSearchParams = (model: string, manufacturer: string) => {
		const searchParams = new URLSearchParams(window.location.search);

		if (model) {
			searchParams.set('model', model);
		} else {
			searchParams.delete('model');
		}

		if (manufacturer) {
			searchParams.set('manufacturer', manufacturer);
		} else {
			searchParams.delete('manufacturer');
		}

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

		router.push(newPathname);
	};

	return (
		<form
			className="flex items-center
			justify-start max-sm:flex-col
			w-full relative max-sm:gap-4
			max-w-3xl"
			onSubmit={handleSearch}
		>
			<div
				className="flex-1 max-sm:w-full
				flex justify-start items-center
				relative"
			>
				<SearchManufacturer
					manufacturer={manufacturer}
					setManufacturer={setManufacturer}
				/>
				<div
					className="border border-black
					rounded-r-full h-[56px] w-[75px]
					flex justify-center items-center
					shadow-inner shadow-white
					hover:shadow-primaryColor
					sm:hidden transition-all
					hover:shadow-md"
				>
					<SearchButton otherClasses="sm:hidden" />
				</div>
			</div>
			<div
				className="flex-1 max-sm:w-full
				flex justify-start items-center
				relative"
			>
				<SearchModel model={model} setModel={setModel} />
				<div
					className="border border-black
					rounded-r-full h-[56px] w-[75px]
					flex justify-center items-center
					shadow-inner shadow-white
					hover:shadow-primaryColor
					sm:hidden transition-all
					hover:shadow-md"
				>
					<SearchButton otherClasses="sm:hidden" />
				</div>
			</div>
			<div
				className="border border-black
				rounded-r-full h-[56px] w-[75px]
				flex justify-center items-center
				shadow-inner shadow-white
				hover:shadow-primaryColor
				max-sm:hidden transition-all
				hover:shadow-md"
			>
				<SearchButton otherClasses="max-sm:hidden" />
			</div>
		</form>
	);
};

export default SearchBar;
